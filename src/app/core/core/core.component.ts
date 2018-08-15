import { Component, OnInit, Input } from '@angular/core';

import { AngularFirestore, CollectionReference } from 'angularfire2/firestore';

import { State } from '../../interfaces/state.interface';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { City } from '../../interfaces/city.interfaces';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  states$: Observable<State[]>;
  cities$: Observable<City[]>;
  selectedState: number;
  selectedCity: string;
  loadingState =  true;
  loadingCity =  false;

  constructor(
    private _db: AngularFirestore
  ) { }

  ngOnInit() {
    this.states$ = this._db.collection<State>('/states',
      (ref: CollectionReference) => ref.orderBy('Nome', 'asc')).valueChanges();
      this.states$
      .pipe(take(1))
      .subscribe(() => this.loadingState = false);
  }


  selectState() {
    this.loadingCity = true;
    this.cities$ = this._db.collection<City>('/cities',
      (ref: CollectionReference) => ref.orderBy('Nome', 'asc').where('Estado', '==', this.selectedState)).valueChanges();
      this.cities$
      .pipe(take(1))
      .subscribe(() => this.loadingCity = false);
  }

  create(city: City): Promise<void> {
    const uid = this._db.createId();
    return this._db.collection('/cities').doc(uid).set({
      ID: city.ID,
      Nome: city.Nome,
      Estado: city.Estado
    });
  }

}


