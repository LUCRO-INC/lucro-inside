import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiaRoutingModule } from './tecnologia-routing.module';
import { TecnologiaComponent } from './tecnologia.component';


@NgModule({
  declarations: [TecnologiaComponent],
  imports: [
    CommonModule,
    TecnologiaRoutingModule
  ]
})
export class TecnologiaModule { }
