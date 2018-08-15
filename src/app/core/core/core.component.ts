import { Component, OnInit, Input } from '@angular/core';

import { AngularFirestore, CollectionReference } from 'angularfire2/firestore';

import { State } from '../../interfaces/state.interface';

import { Observable } from 'rxjs';
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

  constructor(
    private _db: AngularFirestore
  ) { }

  ngOnInit() {
    this.states$ = this._db.collection<State>('/states',
      (ref: CollectionReference) => ref.orderBy('Nome', 'asc')).valueChanges();
  }


  selectState() {
    this.cities$ = this._db.collection<City>('/cities',
      (ref: CollectionReference) => ref.orderBy('Nome', 'asc').where('Estado', '==', this.selectedState)).valueChanges();
    console.log(this.selectedState);
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


