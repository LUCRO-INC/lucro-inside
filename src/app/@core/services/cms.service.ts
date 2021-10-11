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
        images: [
          {
            id: 1,
            src: '../../../assets/images/Group 35.svg',
            class: 'home__image1',
          },
          {
            id: 2,
            src: '../../../assets/images/Rectangle 241.png',
            class: 'home__image2',
          },
          {
            id: 3,
            src: '../../../assets/images/Rectangle 238.png',
            class: 'home__image3',
          },
          {
            id: 4,
            src: '../../../assets/images/Ellipse 44.svg',
            class: 'home__image4',
          },
          {
            id: 5,
            src: '../../../assets/images/Ellipse 42.png',
            class: 'home__image5',
          },
          {
            id: 6,
            src: '../../../assets/images/Ellipse 43.png',
            class: 'home__image6',
          },
          {
            id: 7,
            src: '../../../assets/images/Group 31.svg',
            class: 'home__image7',
          },
        ]
      },
      {
        name: 'sectionTwo',
        title: 'Nuestro propósito',
        body: 'Somos una empresa colombiana orientada a ofrecer servicios de tecnología, soluciones de software y transformación digital para empresas. Para Lucro, la investigación e inmersión profunda sobre los datos estadísticos del consumidor y el mercado garantizan el éxito en las estrategias empresariales. Investigación, análisis de datos, estrategia y ejecución son los pilares que defendemos. Esto ha hecho que grandes empresas líderes en Colombia trabajen de la mano con Lucro-inside para potencializar su core de negocio.',
        images: [
          {
            id: 1,
            src: '../../../assets/images/Path 997.svg',
            class: 'purpose__image1',
          },
          {
            id: 2,
            src: '../../../assets/images/Group 1461.svg',
            class: 'purpose__image2',
          },
          {
            id: 3,
            src: '../../../assets/images/Group 31.png',
            class: 'purpose__image3',
          },
          {
            id: 4,
            src: '../../../assets/images/concentrated-dark-skinned-freelancer-holds-paper-documents-and-mobile-phone-works-remotely-in-coworking-space-watches-digital-online-webinar-thinks-about-organisation-plan 1.png',
            class: 'purpose__image4',
          },
        ]
      },
      {
        name: 'sectionThree',
        title: '¿En qué creemos?',
        body: 'En Lucro creemos en la participación de cada individuo en la sociedad y en la inclusión de todos sin importar sus diferencias de pensamiento, orientación sexual y creencias, por eso contamos con un equipo diverso de profesionales, colaboradores y líderes que trabajan día a día por generar una buena experiencia de usuario y utilizar nuestra tecnología para crear plataformas y recursos que generen un impacto positivo en las empresas.',
        images: [
          {
            id: 1,
            src: '../../../assets/images/Ellipse 44.svg',
            class: 'beliefs__image1',
          },
          {
            id: 2,
            src: '../../../assets/images/Ellipse 42.svg',
            class: 'beliefs__image2',
          },
          {
            id: 3,
            src: '../../../assets/images/Ellipse 43.svg',
            class: 'beliefs__image3',
          },
          {
            id: 4,
            src: '../../../assets/images/Group 31.svg',
            class: 'beliefs__image4',
          },
          {
            id: 5,
            src: '../../../assets/images/satisfied-couple-making-fist-bump-gesture 2.png',
            class: 'beliefs__image5',
          }
        ]
      },
      {
        name: 'sectionFour',
        title: '¿Cómo trabajamos con los clientes?',
        body: 'En Lucro trabajamos de la mano con los clientes, estudiamos sus necesidades y profundizamos en los datos estadísticos de nuestra base adecuados a cada perfil para así proponer las mejores soluciones que requieran y apoyarlos con sus objetivos de negocio. Nuestros estudios de mercado representan a comunidades y culturas de Colombia y el mundo porque creemos que basados en ese entendimiento profundo de los gustos e intereses de las personas se pueden generar mejores oportunidades de crecimiento en los diferentes sectores de la economía.',
        images: [
          {
            id: 1,
            src: '../../../assets/images/Polygon 3.svg',
            class: 'work__image1',
          },
          {
            id: 2,
            src: '../../../assets/images/Ellipse 42.svg',
            class: 'work__image2',
          },
          {
            id: 3,
            src: '../../../assets/images/Ellipse 44.svg',
            class: 'work__image3',
          },
          {
            id: 4,
            src: '../../../assets/images/Group 31.svg',
            class: 'work__image4',
          },
          {
            id: 5,
            src: '../../../assets/images/diverse-hands-united-community-care-gesture 1.png',
            class: 'work__image5',
          }
        ]
      }
    ],

    Contactenos: [
      {
        name: 'sectionContactenos',
        title: '¡Inicia tu solicitud con Lucro!',
        body: 'Nos complace crear una asesoría para ti en Lucro. Es necesario que puedas contar con más de 3 minutos para completar esta solicitud y reservar tu asesoría. ¡Vamos a empezar!',
        images: [
          {
            id: 1,
            src: '../../../assets/images/contactenos/Group 31.svg',
            class: 'contactenos__image1'
          },
          {
            id: 2,
            src: '../../../assets/images/contactenos/Group 34.png',
            class: 'contactenos__image2'
          },
          {
            id: 3,
            src: '../../../assets/images/contactenos/Ellipse 42.svg',
            class: 'contactenos__image3'
          }
        ]
      }
    ]
  };

  constructor() {}

  async get(): Promise<Cms> {
    return this.data;
  }
}
