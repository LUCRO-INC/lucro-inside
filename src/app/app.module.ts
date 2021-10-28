import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './@shared/shared.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { SolucionesComponent } from './pages/soluciones/soluciones.component';
import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { ConsumidoresComponent } from './pages/consumidores/consumidores.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
