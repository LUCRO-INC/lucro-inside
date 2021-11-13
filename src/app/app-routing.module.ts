import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DeveloperGuard } from './developer.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tecnologia',
    // canActivate: [DeveloperGuard],
    loadChildren: () => import('./pages/tecnologia/tecnologia.module').then(m => m.TecnologiaModule)
  },
  {
    path: 'consumidores',
    redirectTo: 'home',
    pathMatch: 'full'
    // canActivate: [DeveloperGuard],
    // loadChildren: () => import('./pages/consumidores/consumidores.module').then(m => m.ConsumidoresModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'empresas',
    loadChildren: () => import('./pages/empresas/empresas.module').then(m => m.EmpresasModule)
  },
  {
    path: 'soluciones',
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
