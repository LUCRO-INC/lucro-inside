import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactenosComponent } from './contactenos.component';


@NgModule({
  declarations: [ContactenosComponent],
  imports: [
    CommonModule,
    ContactenosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactenosModule { }
