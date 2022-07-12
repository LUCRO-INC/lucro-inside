import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { DeveloperGuard } from './developer.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'empresas',
    loadChildren: () =>
      import('./pages/empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    path: 'soluciones',
    loadChildren: () =>
      import('./pages/soluciones/soluciones.module').then(
        (m) => m.SolucionesModule
      ),
  },
  {
    path: 'tecnologia',
    loadChildren: () =>
      import('./pages/tecnologia/tecnologia.module').then(
        (m) => m.TecnologiaModule
      ),
  },
  {
    path: 'consumidores',
    loadChildren: () =>
      import('./pages/consumidores/consumidores.module').then(
        (m) => m.ConsumidoresModule
      ),
  },
  {
    path: 'consumidores/:id',
    loadChildren: () =>
      import('./pages/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: 'contactenos',
    loadChildren: () =>
      import('./pages/contactenos/contactenos.module').then(
        (m) => m.ContactenosModule
      ),
  },
  {
    path: 'soluciones-test',
    loadChildren: () =>
      import('./pages/soluciones-test/soluciones-test.module').then(
        (m) => m.SolucionesTestModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
