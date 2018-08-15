import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '../../../../node_modules/angularfire2/firestore';

import { State } from '../../interfaces/states.interface';

import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  state$: Observable<State[]>;

  constructor(
    private _db: AngularFirestore
  ) { }

  ngOnInit() {
    this.state$ = this._db.collection<State>('/states').valueChanges();
  }

}
