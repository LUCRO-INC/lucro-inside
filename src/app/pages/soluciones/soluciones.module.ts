import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucionesRoutingModule } from './soluciones-routing.module';
import { SolucionesComponent } from './soluciones.component';


@NgModule({
  declarations: [SolucionesComponent],
  imports: [
    CommonModule,
    SolucionesRoutingModule
  ]
})
export class SolucionesModule { }
