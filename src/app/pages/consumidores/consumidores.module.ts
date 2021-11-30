import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidoresRoutingModule } from './consumidores-routing.module';
import { ConsumidoresComponent } from './consumidores.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [ConsumidoresComponent],
  imports: [
    CommonModule,
    ConsumidoresRoutingModule,
    SwiperModule
  ]
})
export class ConsumidoresModule { }
