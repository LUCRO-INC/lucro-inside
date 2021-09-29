import { Injectable } from '@angular/core';
import { Cms } from '../models/cms';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private data: Cms = {
    home: [
      {
        name: 'home',
        title: '¿Qué es Lucro para empresas?',
        body: 'Fortalece tus procesos empresariales con nuestras soluciones de software a la medida. Con Lucro Inside estarás a la vanguardia en la implementación de sistemas para calcular variables de interés que mejoren las estrategias de negocio e impulsen la relación entre clientes y productos.'
      }
    ]
  }

  constructor() { }

  async get(): Promise<Cms> {
    return this.data;
  }
}
