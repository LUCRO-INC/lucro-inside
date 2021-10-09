import { Injectable } from '@angular/core';
import { Cms } from '../models/cms';

@Injectable({
  providedIn: 'root',
})
export class CmsService {
  private data: Cms = {
    Empresas: [
      {
        name: 'sectionOne',
        title: '¿Qué es Lucro para empresas?',
        body: 'Fortalece tus procesos empresariales con nuestras soluciones de software a la medida. Con Lucro Inside estarás a la vanguardia en la implementación de sistemas para calcular variables de interés que mejoren las estrategias de negocio e impulsen la relación entre clientes y productos.',
      },
      {
        name: 'sectionTwo',
        title: 'Nuestro propósito',
        body: 'Somos una empresa colombiana orientada a ofrecer servicios de tecnología, soluciones de software y transformación digital para empresas. Para Lucro, la investigación e inmersión profunda sobre los datos estadísticos del consumidor y el mercado garantizan el éxito en las estrategias empresariales. Investigación, análisis de datos, estrategia y ejecución son los pilares que defendemos. Esto ha hecho que grandes empresas líderes en Colombia trabajen de la mano con Lucro-inside para potencializar su core de negocio.',
      },
      {
        name: 'sectionThree',
        title: '¿En qué creemos?',
        body: 'En Lucro creemos en la participación de cada individuo en la sociedad y en la inclusión de todos sin importar sus diferencias de pensamiento, orientación sexual y creencias, por eso contamos con un equipo diverso de profesionales, colaboradores y líderes que trabajan día a día por generar una buena experiencia de usuario y utilizar nuestra tecnología para crear plataformas y recursos que generen un impacto positivo en las empresas.',
      },
      {
        name: 'sectionFour',
        title: '¿Cómo trabajamos con los clientes?',
        body: 'En Lucro trabajamos de la mano con los clientes, estudiamos sus necesidades y profundizamos en los datos estadísticos de nuestra base adecuados a cada perfil para así proponer las mejores soluciones que requieran y apoyarlos con sus objetivos de negocio. Nuestros estudios de mercado representan a comunidades y culturas de Colombia y el mundo porque creemos que basados en ese entendimiento profundo de los gustos e intereses de las personas se pueden generar mejores oportunidades de crecimiento en los diferentes sectores de la economía.',
      }
    ],
  };

  constructor() {}

  async get(): Promise<Cms> {
    return this.data;
  }
}
