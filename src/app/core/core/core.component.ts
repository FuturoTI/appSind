import { Component, OnInit } from '@angular/core';

import { State } from '../../interfaces/state.interface';
import { City } from '../../interfaces/city.interfaces';
import { EventType } from '../../interfaces/eventtype.interface';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DbService } from '../../sevices/db.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  states$: Observable<State[]>;
  cities$: Observable<City[]>;
  eventTypes$: Observable<EventType[]>;
  selectedState: number;
  selectedCity: string;
  loadingState = true;
  loadingCity = false;

  constructor(
    private _dbService: DbService
  ) { }

  ngOnInit() {
    this.states$ = this._dbService.getStates().valueChanges();
    this.states$
      .pipe(take(1))
      .subscribe(res => {
        this.eventTypes$ = this._dbService.getEventType().valueChanges();
        this.loadingState = false;
      });
  }

  selectState() {
    this.loadingCity = true;
    this.cities$ = this._dbService.getCities(this.selectedState).valueChanges();
    this.cities$
      .pipe(take(1))
      .subscribe(() => this.loadingCity = false);
  }

}


