import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/techModels/tecnologia';

@Injectable({
  providedIn: 'root',
})
export class TechCmsService {
  private data: Tecnologia = {
    title: 'Nuestra tecnología',
    content: [
      {
        name: 'gamificacion',
        img: {
          video:
            '/assets/images/tecnologia/Videos/Gamification.mp4',
          imgIcon:
            '/assets/images/tecnologia/gamificacion/gamificacionMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/gamificacion/gamificacionIcono.svg',
          title: 'Gamificación',
          content:
            'En Lucro empleamos mecánicas de juego en entornos que tradicionalmente no son recreativos para fortalecer organizaciones en su núcleo o mejorar el compromiso de los usuarios hacia un producto o servicio. Nuestra tecnología integra la experiencia y la diversión para dinamizar procesos y transformarlos en estrategias didácticas.',
        },
      },
      {
        name: 'scrapper',
        img: {
          video:
            '/assets/images/tecnologia/Videos/Scrapper.mp4',
          imgIcon:
            '/assets/images/tecnologia/scrapper/scrapperMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/scrapper/scrapperIcono.svg',
          title: 'Scraper',
          content:
            'Nuestro software extrae información de millones de sitios web mediante un proceso automático hasta dar con información relevante. Esta herramienta es de gran utilidad para las empresas que necesiten recolectar datos, compararlos y procesarlos.',
        },
      },
      {
        name: 'identificadorImagenes active',
        img: {
          imgFocus:
            '/assets/images/tecnologia/identificadorImagenes/identificadorImagenesMarco.png',
          imgIcon:
            '/assets/images/tecnologia/identificadorImagenes/identificadorImagenesMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/identificadorImagenes/identificadorImagenesIcono.svg',
          title: 'Identificador de imágenes',
          content:
            'Herramienta de reconocimiento de imagen para analizar e interpretar datos según las necesidades de la empresa. Imagina que un sistema usa sus “ojos” de la misma forma como lo hacen los humanos para la interpretación de datos a través de la captura de imágenes. “Libera el potencial escondido que tiene una imagen traducida a datos”.',
        },
      },
      {
        name: 'automatizacionRPA',
        img: {
          video:
            '/assets/images/tecnologia/Videos/RPA.mp4',
          imgIcon:
            '/assets/images/tecnologia/automatizacionRPA/automatizacionRPAMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/automatizacionRPA/automatizacionRPAIcono.svg',
          title: 'Automatización robótica de procesos (RPA)',
          content:
            'En la actualidad muchas empresas que pueden crear Bots, pero ninguna como Lucro pone a disposición múltiples APIs (de seguridad, Qr, detección de imagen, flujo conversacional) que alimentan todo un ecosistema de bots para convertirlos en soluciones sencillas de alto impacto en la productividad de su modelo de negocio.',
        },
      },
      {
        name: 'modelosPredictivos',
        img: {
          imgFocus:
            '/assets/images/tecnologia/modelosPredictivos/modelosPredictivosMarco.png',
          imgIcon:
            '/assets/images/tecnologia/modelosPredictivos/modelosPredictivosMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/modelosPredictivos/modelosPredictivosIcono.svg',
          title: 'Modelos Predictivos',
          content:
            'En Lucro empleamos mecánicas de juego en entornos que tradicionalmente no son recreativos para fortalecer organizaciones en su núcleo o mejorar el compromiso de los usuarios hacia un producto o servicio. Nuestra tecnología integra la experiencia y la diversión para dinamizar procesos y transformarlos en estrategias didácticas.',
        },
      },
      {
        name: 'bigData',
        img: {
          imgFocus:
            '/assets/images/tecnologia/bigData/bigDataMarco.png',
          imgIcon:
            '/assets/images/tecnologia/bigData/bigDataMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/bigData/bigDataIcono.svg',
          title: 'Big Data',
          content:
            'El crecimiento exponencial de la comunidad de Lucro mantiene datos actualizados día a día que nos permiten ejecutar modelos correctivos y predictivos con una infraestructura tecnológica en tiempo real, para la creación de informes de gestión que faciliten la toma de decisiones.',
        },
      },
    ],
  };

  constructor() {}

  async get(): Promise<Tecnologia> {
    return this.data;
  }
}
