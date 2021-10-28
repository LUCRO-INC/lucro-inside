import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnologiaComponent } from './tecnologia.component';

const routes: Routes = [{
  path: '',
  component: TecnologiaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnologiaRoutingModule { }
