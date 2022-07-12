import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolucionesTestComponent } from './soluciones-test.component';
const routes: Routes = [
  {
    path: '',
    component: SolucionesTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolucionesTestRoutingModule {}
