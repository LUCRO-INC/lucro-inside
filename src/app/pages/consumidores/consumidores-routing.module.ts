import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumidoresComponent } from './consumidores.component';

const routes: Routes = [{
  path: '',
  component: ConsumidoresComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumidoresRoutingModule { }
