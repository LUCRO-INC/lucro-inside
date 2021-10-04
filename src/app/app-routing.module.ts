import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    redirectTo: 'EmpresasComponent',
  },
  {
    path: 'contactenos',
    redirectTo: 'ContactenosComponent',
  },
  { path: 'home', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
