import { Injectable } from '@angular/core';
import { Cms } from '../models/cms';

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  private data: Cms = {
    home: [
      {
        name: 'sectionOne',
        title: '¿Qué es Lucro para empresas?',
        body: 'Fortalece tus procesos empresariales con nuestras soluciones de software a la medida. Con Lucro Inside estarás a la vanguardia en la implementación de sistemas para calcular variables de interés que mejoren las estrategias de negocio e impulsen la relación entre clientes y productos.'
      },{
        name: 'sectionTwo',
        title: 'Nuestro propósito',
        body: 'Somos una empresa colombiana orientada a ofrecer servicios de tecnología, soluciones de software y transformación digital para empresas. Para Lucro, la investigación e inmersión profunda sobre los datos estadísticos del consumidor y el mercado garantizan el éxito en las estrategias empresariales. Investigación, análisis de datos, estrategia y ejecución son los pilares que defendemos. Esto ha hecho que grandes empresas líderes en Colombia trabajen de la mano con Lucro-inside para potencializar su core de negocio.'
      }
    ]
  }

  constructor() { }

  async get(): Promise<Cms> {
    return this.data;
  }
}
