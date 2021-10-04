import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresasComponent,
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    component: EmpresasComponent,
    pathMatch: 'full'
  },
  {
    path: 'contactenos',
    component: ContactenosComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
