import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    CoreComponent
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
