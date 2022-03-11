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
            src: '/assets/images/Group 35.svg',
            class: 'home__image1',
          },
          {
            id: 2,
            src: '/assets/images/Rectangle 241.png',
            class: 'home__image2',
          },
          {
            id: 3,
            src: '/assets/images/Rectangle 238.png',
            class: 'home__image3',
          },
          {
            id: 4,
            src: '/assets/images/Ellipse 44.svg',
            class: 'home__image4',
          },
          {
            id: 5,
            src: '/assets/images/Ellipse 42.png',
            class: 'home__image5',
          },
          {
            id: 6,
            src: '/assets/images/Ellipse 43.png',
            class: 'home__image6',
          },
          {
            id: 7,
            src: '/assets/images/Group 31.svg',
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
            src: '/assets/images/Path 997.svg',
            class: 'purpose__image1',
          },
          {
            id: 2,
            src: '/assets/images/Group 1461.svg',
            class: 'purpose__image2',
          },
          {
            id: 3,
            src: '/assets/images/Group 31.png',
            class: 'purpose__image3',
          },
          {
            id: 4,
            src: '/assets/images/purpose-image.png',
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
            src: '/assets/images/Ellipse 44.svg',
            class: 'beliefs__image1',
          },
          {
            id: 2,
            src: '/assets/images/Ellipse 42.svg',
            class: 'beliefs__image2',
          },
          {
            id: 3,
            src: '/assets/images/Ellipse 43.svg',
            class: 'beliefs__image3',
          },
          {
            id: 4,
            src: '/assets/images/Group 31.svg',
            class: 'beliefs__image4',
          },
          {
            id: 5,
            src: '/assets/images/satisfied-couple-making-fist-bump-gesture 2.png',
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
            src: '/assets/images/Polygon 3.svg',
            class: 'work__image1',
          },
          {
            id: 2,
            src: '/assets/images/Ellipse 42.svg',
            class: 'work__image2',
          },
          {
            id: 3,
            src: '/assets/images/Ellipse 44.svg',
            class: 'work__image3',
          },
          {
            id: 4,
            src: '/assets/images/Group 31.svg',
            class: 'work__image4',
          },
          {
            id: 5,
            src: '/assets/images/diverse-hands-united-community-care-gesture 1.png',
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
            src: '/assets/images/contactenos/Group 31.svg',
            class: 'contactenos__image1'
          },
          {
            id: 2,
            src: '/assets/images/contactenos/Group 34.png',
            class: 'contactenos__image2'
          },
          {
            id: 3,
            src: '/assets/images/contactenos/Ellipse 42.svg',
            class: 'contactenos__image3'
          }
        ]
      }
    ],

    Soluciones: [
      {
        name: 'evaluacionDesempeno',
        label: 'Desempeño de terreno',
        title: 'Evaluación de desempeño en terreno',
        subTitle: 'Lo que el vendedor ve, lo pueden ver todos en la compañía',
        body: 'Adquiere un innovador sistema de evaluación y verificación para equipos de trabajo y/o capacitaciones, en el terreno de la ejecución, con trazabilidad en tiempo real para el logro de objetivos y potencializar tu fuerza comercial.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/evaluacionDesempeño/Ellipse 2076.svg',
            class: 'evaluacion__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/evaluacionDesempeño/image 48.png',
            class: 'evaluacion__image2'
          },
          {
            id: 3,
            src: '/assets/images/Soluciones/evaluacionDesempeño/Ellipse 2077.svg',
            class: 'evaluacion__image3'
          }
        ],
        questions: [
          "¿El vendedor realmente está yendo al trabajo de campo asignado?",
          "¿El vendedor organizó el punto de venta según los parámetros de la empresa?",
          "¿El vendedor identificó los agotados en el punto de venta?",
          "¿Los supermercados están cumpliendo las exhibiciones adicionales que acordamos?",
          "¿El estándar de lineal que definimos se cumple según las prioridades de la compañía?"

        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'machineLearning',
        label: 'Machine Learning',
        title: 'Machine Learning',
        subTitle: 'Somos los ojos de tu compañía en puntos de venta, hogares de los consumidores y en donde necesites ver de primera mano.',
        body: 'Utiliza este campo de la Inteligencia Artificial para la realización de auditorías de inventarios, calificación y cuantificación de productos presentes en anaqueles en tiempo real, verificación del estándar de exhibición y más.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/MachineLearning/Ellipse 2076.svg',
            class: 'machineLearning__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/MachineLearning/Ellipse 2077.svg',
            class: 'machineLearning__image2'
          },
          {
            id: 3,
            src: '/assets/images/Soluciones/MachineLearning/Group 1478.png',
            class: 'machineLearning__image3'
          }
        ],
        questions: [
          "¿A qué precio están realmente vendiendo mi producto y el de la competencia en un punto de venta?",
          "Cuando un vendedor sale de un punto de venta, ¿Cómo dejó el punto de venta? ¿Qué tan bien organizado está el punto de venta?",
          "¿Qué agotados tengo en el punto de venta en un momento determinado?",
          "¿Cuál es el porcentaje de lineal que tengo en cualquier punto de venta?",
          "¿Cómo son las canastas cruzadas y con qué otros productos compran mi marca?"

        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'solucionesDashboard',
        label: 'Dashboard',
        title: 'Soluciones Dashboard',
        subTitle: 'No es sólo tener datos, es tenerlos organizados para encontrar insight.',
        body: 'Emplea herramientas de gestión empresarial para levantamiento de información (indicadores, métricas, geolocalización, fechas, entre otros) a través de una app personalizada.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/solucionesDashboard/Ellipse 2076.svg',
            class: 'dashboard__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/solucionesDashboard/image 39.svg',
            class: 'dashboard__image2'
          }
        ],
        questions: [
          "¿Existe correlación entre las ventas de un vendedor, su género y edad?",
          "¿Qué variables influyen en la venta de mi producto?",
          "¿Estar cerca de un colegio impacta la comercialización de mi producto?"

        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'solucionesRPA',
        label: 'RPA',
        title: 'Soluciones RPA',
        subTitle: 'Automatizaciones que generan eficiencias.',
        body: 'Aplica la automatización robótica de procesos (Software que emula acciones humanas) para dar soluciones de lenguaje natural y análisis de sentimiento en las estrategias omnicanal de tu empresa. ',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/solucionesRPA/Ellipse 2076.svg',
            class: 'rpa__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/solucionesRPA/image 41.png',
            class: 'rpa__image2'
          }
        ],
        questions: [
          "¿Puedo automatizar mis procesos en el BackOffice de mi empresa aumentando la productividad y eliminando cargos?",
          "¿Puedo automatizar la comunicación con diferentes stakeholders sin tener que utilizar un call center o empleados directos?",
          "¿Puedo eliminar procesos que requieren extensos trámites ahorrando tiempo y dinero?",
          "¿Puedo eliminar procesos para enfocar aún más a mi equipo de trabajo en sus labores?"

        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'investigacionSegmentada',
        label: 'Wisdom',
        title: 'Investigación segmentada',
        subTitle: 'El futuro de la investigación de mercados en el mundo: Conocemos lo que gente dice y lo que realmente hace',
        body: 'Toma decisiones empresariales inteligentes, basadas en nuestros paneles de investigación, creados con segmentaciones, filtros avanzados y cruces que evidencian correlaciones con las más de 8 mil preguntas que hemos realizado a nuestro panel.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/investigacionSegmentada/Ellipse 2076.svg',
            class: 'investigacion__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/investigacionSegmentada/image 42.png',
            class: 'investigacion__image2'
          }
        ],
        questions: [
          "¿Podemos construir un análisis de salud de marca a bajo costo y en menos de 15 quince días?",
          "¿Puedo analizar no sólo las ciudades principales sino también poblaciones y ciudades más pequeñas?",
          "¿Existe alguna correlación entre el consumo de mi marca y los hobbies de las personas?",
          "¿Puedo conocer más allá de lo que la gente dice lo que realmente hay en las neveras o anaqueles de mis consumidores?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'codigosQR',
        label: 'Códigos QR',
        title: 'Sistema de QR personalizados',
        subTitle: 'Generamos códigos QR que son tu llave para la información',
        body: 'Implementa sistemas de QR personalizados altamente funcionales para promocionales, seguimiento de paquetes o inventario, cartas de restaurantes, controles de accesos, entre otros.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/sistemaQR/QR 1.png',
            class: 'codigos__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/sistemaQR/Ellipse 2076.png',
            class: 'codigos__image2'
          }
        ],
        questions: [
          "¿Puedo controlar los accesos a mi compañía por medio de un código QR?",
          "¿Puedo generar un sistema de pago a través de códigos QR en diferentes puntos de venta?",
          "¿Puedo generar sistema de conversación con mis clientes/o consumidores a partir de códigos QR?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'realidadAumentada',
        label: 'Realidad Aumentada',
        title: 'Gamificación y realidad aumentada',
        subTitle: 'Cuando el usuario juega con tu marca, aprende mucho más de ella.',
        body: 'Ejecuta dinámicas y mecánicas de gamificación para mejorar estrategias, resultados y demás proyectos empresariales, convirtiendo tareas y procesos aburridos en mundos virtuales divertidos.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/realidadAumentada/Ellipse 2076.svg',
            class: 'realidad__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/realidadAumentada/Group 1478.png',
            class: 'realidad__image2'
          },
          {
            id: 3,
            src: '/assets/images/Soluciones/realidadAumentada/Ellipse 2077.svg',
            class: 'realidad__image3'
          }
        ],
        questions: [
          "¿Puedo lograr contar una historia con realidad aumentada a través de mis productos?",
          "¿Puedo lograr que a través de mis empaques le cuente una historia a mi consumidor con realidad aumentada?",
          "¿Puedo lograr que mis consumidores vayan a cierta ubicación geográfica a donde estratégicamente quiero llevarlos?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'ads',
        label: 'Ads',
        title: 'Optimizador de pauta',
        subTitle: 'Volviendo la publicidad digital aún más eficiente',
        body: 'Crea una pauta comercial optimizada en consumidores que presenten un interés real y comprobable sobre tu marca. Nuestra tecnología realiza un entendimiento profundo de clientes y su entorno en tiempo real, más allá de gustos e intereses.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/ads/Ellipse 2076.svg',
            class: 'ads__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/ads/image 40.png',
            class: 'ads__image2'
          }
        ],
        questions: [
          "¿Puedo lograr hablarle a grupos específicos de consumidores?",
          "¿Puedo pautarle solo a consumidores de mi competencia?",
          "¿Puedo pautarle a usuarios que hoy no me tienen en su hogar?",
          "¿Puedo pautarle a personas que están cambiando sus hábitos de consumo?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      },
      {
        name: 'scraper',
        label: 'Scraper',
        title: 'Lucro Scraper',
        subTitle: 'Una misma marca, un mundo de precios diferentes',
        body: 'Incrementa tus ventas y analiza el precio de tus productos y de la competencia con nuestro identificador de precios en tiendas electrónicas en tiempo real. Incluye arquitectura analítica de agrupación de datos, comparación por secuencias de tiempos y su respectivo tablero.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/scraper/Ellipse 2076 (1).svg',
            class: 'scraper__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/scraper/image 40.svg',
            class: 'scraper__image2'
          }
        ],
        questions: [
          "¿Las diferentes plataformas E-commerce están respetando mi precio de venta?",
          "¿Cómo ha sido la variación de precios de mi competencia en los diferentes E-commerce?",
          "¿Puedo tener alarmas cuando mi competencia baje de precio?",
          "¿Puedo conocer en cuáles E-commerce están vendiendo mi producto y en cuáles estoy agotado?",
          "¿Puedo saber si el E-commerece está promocionando la imagen de mi producto adecuada?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        }
      },
      {
        name: 'chatbot',
        label: 'ChatBot',
        title: 'Desarrollo de ChatBot',
        subTitle: 'Una conversación fluida con tus clientes te genera resultados increíbles',
        body: 'Utiliza nuestra metodología Robotic Process Automation junto con el procesamiento del lenguaje natural para brindar una mejor experiencia a clientes o consumidores y al mismo tiempo recopilar información útil para la empresa.',
        images: [
          {
            id: 1,
            src: '/assets/images/Soluciones/chatbot/Ellipse 2076.svg',
            class: 'chatbot__image1'
          },
          {
            id: 2,
            src: '/assets/images/Soluciones/chatbot/Group 1478.png',
            class: 'chatbot__image2'
          },
          {
            id: 3,
            src: '/assets/images/Soluciones/chatbot/Ellipse 2077.png',
            class: 'chatbot__image3'
          },
          {
            id: 4,
            src: '/assets/images/Soluciones/chatbot/image 75.png',
            class: 'chatbot__image4'
          }
        ],
        questions: [
          "¿Puedo hacer que un robot le de atención al cliente humanizada a mis consumidores?",
          "¿Puedo optimizar el proceso de PQR’s a través de un ChatBot?",
          "¿Puedo hacer que la experiencia del usuario al interactuar con el Bot sea agradable?"
        ],
        button: {
          content: 'contactar un comercial',
          class: 'btn-ghost'
        },
      }
    ],

    Clientes: [
      {
        name: 'alpina',
        src: '/assets/images/clientes/alpina.png',
        hover: '/assets/images/clientes/alpina-hover.png'
      },
      {
        name: 'coca-cola',
        src: '/assets/images/clientes/coca-cola.png',
        hover: '/assets/images/clientes/coca-cola-hover.png'
      },
      {
        name: 'henkel',
        src: '/assets/images/clientes/henkel.png',
        hover: '/assets/images/clientes/henkel-hover.png'
      },
      {
        name: 'cafam',
        src: '/assets/images/clientes/cafam.png',
        hover: '/assets/images/clientes/cafam-hover.png'
      },
      {
        name: 'juan-valdez',
        src: '/assets/images/clientes/juan-valdez.png',
        hover: '/assets/images/clientes/juan-valdez-hover.png'
      },
      {
        name: 'carvajal',
        src: '/assets/images/clientes/carvajal.png',
        hover: '/assets/images/clientes/carvajal-hover.png'
      },
      {
        name: 'abinbev',
        src: '/assets/images/clientes/abinbev.png',
        hover: '/assets/images/clientes/abinbev-hover.png'
      },
      {
        name: 'bios',
        src: '/assets/images/clientes/bios.png',
        hover: '/assets/images/clientes/bios-hover.png'
      },
      {
        name: 'adbid',
        src: '/assets/images/clientes/adbid.png',
        hover: '/assets/images/clientes/adbid-hover.png'
      },
      {
        name: 'innova',
        src: '/assets/images/clientes/innova.png',
        hover: '/assets/images/clientes/innova-hover.png'
      },
      {
        name: 'placita',
        src: '/assets/images/clientes/placita.png',
        hover: '/assets/images/clientes/placita-hover.png'
      },
      // {
      //   name: 'unilever',
      //   src: '/assets/images/clientes/unilever.png',
      //   hover: '/assets/images/clientes/unilever-hover.png'
      // },
      // {
      //   name: 'coca-cola',
      //   src: '/assets/images/clientes/coca-cola.png',
      //   hover: '/assets/images/clientes/coca-cola-hover.png'
      // },
    ]
  }

  constructor() {}

  async get(): Promise<Cms> {
    return this.data;
  }
}
