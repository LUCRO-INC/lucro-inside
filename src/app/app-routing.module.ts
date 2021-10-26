import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DeveloperGuard } from './developer.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empresas',
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: 'soluciones',
    canActivate: [DeveloperGuard],
    loadChildren: () => import('./pages/soluciones/soluciones.module').then(m => m.SolucionesModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./pages/contactenos/contactenos.module').then(m => m.ContactenosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
