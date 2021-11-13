import { NgModule } from '@angular/core';
import { NgxGlideModule } from 'ngx-glide';
import { CommonModule } from '@angular/common';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
import { NgxGlideComponent } from './ngx-glide/ngx-glide.component';


@NgModule({
  declarations: [EmpresasComponent, NgxGlideComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    NgxGlideModule
  ]
})
export class EmpresasModule { }
