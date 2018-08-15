import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '../../../node_modules/angularfire2/firestore';
import { State } from '../interfaces/state.interface';
import { City } from '../interfaces/city.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getStates(): AngularFirestoreCollection<State> {
    return this._db.collection<State>('/states',
    (ref: CollectionReference) => ref.orderBy('Nome', 'asc'));
  }

  getCities(selectedState: number): AngularFirestoreCollection<City> {
    return this._db.collection<City>('/cities',
    (ref: CollectionReference) => ref.orderBy('Nome', 'asc').where('Estado', '==', selectedState));
  }
}
