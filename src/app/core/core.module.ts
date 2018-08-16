import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatTableModule
  ],
  exports: [
    CoreComponent
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
