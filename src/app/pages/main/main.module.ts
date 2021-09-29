import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { PurposeComponent } from 'src/app/components/purpose/purpose.component';
import { BeliefsComponent } from 'src/app/components/beliefs/beliefs.component';
import { WorkComponent } from 'src/app/components/work/work.component';
import { SharedModule } from 'src/app/@shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    PurposeComponent,
    BeliefsComponent,
    WorkComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
