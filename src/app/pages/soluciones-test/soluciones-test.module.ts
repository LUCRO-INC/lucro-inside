import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { SolucionesTestRoutingModule } from './soluciones-test-routing.module';
import { SolucionesTestComponent } from './soluciones-test.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

@NgModule({
  declarations: [SolucionesTestComponent, PreguntasComponent],
  imports: [CommonModule, SolucionesTestRoutingModule, SwiperModule],
  exports: [SolucionesTestComponent],
})
export class SolucionesTestModule {}
