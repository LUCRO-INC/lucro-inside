import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConsumidoresRoutingModule } from './consumidores-routing.module';
import { ConsumidoresComponent } from './consumidores.component';
import { CategoryFilterPipe } from 'src/app/@core/pipes/category-filter.pipe';


@NgModule({
  declarations: [
    ConsumidoresComponent,
    CategoryFilterPipe
  ],
  imports: [
    CommonModule,
    ConsumidoresRoutingModule,
    SwiperModule,
    NgxPaginationModule
  ]
})
export class ConsumidoresModule { }
