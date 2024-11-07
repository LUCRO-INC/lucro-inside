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
        title: 'What is Lucro for businesses?',
        body: `We are a Colombian company focused on actionable data through technology services and software solutions, specializing in martech and salestech. We turn people's thoughts and actions into consumer insights, and transform everything the human eye can see into data.`,
        subbody: '<br><br>Trabajamos bajo 2 premisas: <br><ul><li>1. Lo que la gente piensa y hace lo volvemos insights de consumidor.</li><li>2. Transformamos todo lo que que el ojo humano puede ver en datos.</li></ul>',
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
        title: 'Our purpose',
        body: 'We aim to help CPGs in LATAM understand the importance of having real-time data, enabling them to make more informed decisions and develop higher-value strategies. By relying on accurate information, they can increase sales and enhance their competitiveness in the market.',
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
        title: 'What do we believe in?',
        body: 'Integrating machine learning algorithms uncovers hidden patterns in consumer behavior, enabling businesses to design more targeted and effective marketing campaigns.<br><br>Real-time data analytics enhance the ability to anticipate market trends, allowing businesses to proactively adapt their strategies and make informed decisions.<br><br>Digital transformation and the adoption of advanced technologies optimize data capture and analysis at the point of sale, improving marketing strategies and maximizing sales opportunities.',
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
        title: 'How do we work with clients?',
        body: 'At Lucro, we understand the unique needs of each client and adapt to their profile and objectives to provide technological solutions that truly add value. Using artificial intelligence, machine learning, and computer vision, we collect accurate, actionable, real-time data from points of sale.<br><br>We deliver this information through BI dashboards, enabling companies to make quick, informed decisions that enhance their commercial strategies. This addresses the main challenge for CPGs, who often lack critical insights into how their products are performing at the point of sale.',
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
        title: 'Start Your Request with Lucro!',
        body: 'We are excited to assist you in setting up a consultation at Lucro. Please ensure you have more than 3 minutes to complete this request and secure your consultation. Let’s get started!!',
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
        label: 'GROUND PERFORMANCE',
        title: 'Everything the human eye sees, we convert into data',
        subTitle: 'By capturing images or videos, we gain insights into product and consumer behavior by measuring over 100 metrics from real-time data sets.',
        body: 'This generates valuable information for sales, marketing, go-to-market, and trade marketing teams.',
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
          'When are there more competitor products than your own?',
          'At what times does my product rotate the most?',
          'Which stores are we currently out of stock in?'
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'machineLearning',
        label: 'MACHINE LEARNING',
        title: 'Machine Learning',
        subTitle: `We are the eyes of your company at points of sale, in consumers' homes, and wherever you need to observe firsthand the behavior of your products and consumers.`,
        body: 'Leverage this field of Artificial Intelligence to measure inventory in real time, assess and quantify products on shelves, verify display standards, and more.',
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
          'How many products do you have on the shelf?',
          'What proportion of the inventory does your product occupy?',
          'What is the best display for each type of point of sale?',
          'What is the profile of the people who buy my brand?',
          `Who buys my competitor's products?`
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'solucionesDashboard',
        label: 'Dashboard',
        title: 'Data Visualization',
        subTitle: `It's not just about having data; it's about organizing it to uncover insights.`,
        body: 'Through BI dashboards, you gain access to clear information on indicators, metrics, geolocation, dates, and more, all customized to fit your internal culture.',
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
          `How do my consumers' preferences vary by location?`,
          'What are the areas where I have the most competition?',
          'What was my market share yesterday?',
          'What day does my brand rotate the most?',
          'What products is my competitor promoting?'
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'solucionesRPA',
        label: 'RPA',
        title: 'RPA Solutions',
        subTitle: 'Automations that drives to efficiency.',
        body: `Implement robotic process automation (software that mimics human actions) to deliver natural language solutions and sentiment analysis as part of your company's omnichannel strategies.`,
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
          'Can I eliminate processes that require extensive procedures, saving time and money?',
          'Can I eliminate processes to further focus my team on their tasks?',
          'Can I automate my back-office processes, increasing productivity and eliminating positions?',
          'Can I automate communication with different stakeholders without having to use a call center or direct employees?'

        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'investigacionSegmentada',
        label: 'Wisdom',
        title: 'Segmented Research',
        subTitle: 'The future of market research worldwide: Understanding what people say and what they actually do.',
        body: 'Make smart business decisions based on our research panels, designed with advanced segmentation, filters, and cross-tabulations that reveal correlations from over 8,000 questions we’ve asked our panel',
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
          'Can I know beyond what people say, what truly lies in the everyday behaviors of my consumers?',
          'Can I build a brand health analysis at a low cost and in under 15 days?',
          'Can I analyze not only major cities but also smaller towns and cities?',
          `Is there a correlation between the consumption of my brand and people's hobbies?`
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'codigosQR',
        label: 'Convert pictures',
        title: 'Convert pictures and videos into actionable data',
        subTitle: 'Transform images into actionable insights.',
        body: 'By placing a compact device on the ceiling of small stores, monitor product behavior 24/7 with no human intervention. Access all the information needed to optimize operations and make smarter decisions in real-time.',
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
          'Is my product present on the shelf or not?',
          'How many products do you have on the shelf?',
          'What proportion of the inventory does your product occupy?'
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'realidadAumentada',
        label: 'Augmented Reality',
        title: 'Gamification and Augmented Reality',
        subTitle: 'When users interact with your brand, they learn significantly more about it.',
        body: 'Implement gamification dynamics and mechanics to enhance strategies, results, and various business projects, transforming mundane tasks and processes into engaging virtual experiences.',
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
          'Can I tell a story through augmented reality using my products?',
          'Can I make my packaging tell a story to my consumers using augmented reality?',
          'Can I direct my consumers to a specific geographic location that I strategically want to lead them to?'
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'ads',
        label: 'ADS',
        title: 'Ad Optimization',
        subTitle: 'Enhancing the efficiency of digital advertising.',
        body: 'Develop an optimized advertising strategy that targets consumers with genuine and verifiable interest in your brand. Our technology offers a profound understanding of customers and their environments in real time, going beyond mere likes and interests.',
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
          'Can I target only the consumers of my competitors?',
          'Can I target only users who do not currently have my product in their homes?',
          'Can I specifically address targeted consumer groups?',
          'Can I target only people who are changing their consumption habits?'
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        },
      },
      {
        name: 'scraper',
        label: 'SCRAPER',
        title: 'Lucro Scraper',
        subTitle: 'One brand, a world of varied prices.',
        body: 'Increase your sales by analyzing, in real time, the prices of your products and those of your competitors using our Price Scraper tool for online stores. It features an analytical architecture for data grouping and time series comparisons, offering detailed insights by city and region, all accessible through an intuitive dashboard.',
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
          'How do the prices of my products vary?',
          'In which products am I more expensive or cheaper than my competitors?',
          'What is the historical pricing of my products and those of the competition?',
          `What are my competitors' current promotions?`,
        ],
        button: {
          content: 'contact a sales representative',
          class: 'btn-ghost'
        }
      },
      {
        name: 'chatbot',
        label: 'ChatBot',
        title: 'Lucro Promo',
        subTitle: `Claiming promotions from the comfort of home enhances your customers' experience.`,
        body: 'With our WhatsApp Chatbot, consumers can send photos of products to earn points that can be redeemed for prizes, all quickly and easily. We integrate Robotic Process Automation and natural language processing to facilitate seamless interactions while collecting valuable information for your business.',
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
          `Can I see the information about the participants' profiles?`,
          'Can I see how many consumers are interacting with the promotion?',
          'Can I know which promotions generate the most interaction and success?',
          'Can I find out what percentage of users participate in future promotions again?'
        ],
        button: {
          content: 'contact a sales representative',
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
        name: 'postobon',
        src: '/assets/images/clientes/postobon.png',
      },
      {
        name: 'juan-valdez',
        src: '/assets/images/clientes/juan-valdez.png',
        hover: '/assets/images/clientes/juan-valdez-hover.png'
      },
      {
        name: 'reckitt',
        src: '/assets/images/clientes/reckitt.png',
        hover: '/assets/images/clientes/reckitt-hover.png'
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

  constructor() { }

  async get(): Promise<Cms> {
    return this.data;
  }
}
