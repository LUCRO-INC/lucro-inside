import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { SolucionesRoutingModule } from './soluciones-routing.module';
import { SolucionesComponent } from './soluciones.component';


@NgModule({
  declarations: [SolucionesComponent],
  imports: [
    CommonModule,
    SolucionesRoutingModule,
    SwiperModule
  ]
})
export class SolucionesModule { }
