import { Injectable } from '@angular/core';
import { Tecnologia } from '../models/techModels/tecnologia';

@Injectable({
  providedIn: 'root',
})
export class TechCmsService {
  private data: Tecnologia = {
    title: 'Our technology',
    content: [
      {
        name: 'gamificacion',
        img: {
          video: '/assets/images/tecnologia/Videos/Gamification.mp4',
          imgIcon:
            '/assets/images/tecnologia/gamificacion/gamificacionMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/gamificacion/gamificacionIcono.svg',
          title: 'Gamification',
          content:
            'At Lucro, we apply game mechanics in non-traditional recreational environments to strengthen organizations at their core and enhance user engagement with products or services. Our technology blends experience and enjoyment to energize processes, transforming them into effective educational strategies.',
        },
      },
      {
        name: 'scrapper',
        img: {
          video: '/assets/images/tecnologia/Videos/Scrapper.mp4',
          imgIcon: '/assets/images/tecnologia/scrapper/scrapperMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/scrapper/scrapperIcono.svg',
          title: 'Scraper',
          content:
            'Our software extracts information from millions of websites through an automated process, providing CPGs with real-time insights into price and promotion execution on e-commerce platforms. With its dashboards and customizable alert parameters, Scraper allows CPGs to stay informed without the need to manually check each platform.',
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
          title: 'Image Identifier',
          content: `An image recognition tool designed to analyze and interpret data according to your company's needs. Imagine a system using its 'eyes' just like humans do, capturing and interpreting data through images. “Unleash the hidden potential of images transformed into actionable data”.`,
        },
      },
      {
        name: 'automatizacionRPA',
        img: {
          video: '/assets/images/tecnologia/Videos/RPA.mp4',
          imgIcon:
            '/assets/images/tecnologia/automatizacionRPA/automatizacionRPAMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/automatizacionRPA/automatizacionRPAIcono.svg',
          title: 'Robotic Process Automation (RPA)',
          content:
            'Today, many companies can create bots, but none like Lucro offers multiple APIs (security, QR, image detection, conversational flow) that fuel an entire bot ecosystem, transforming them into simple, high-impact solutions that significantly boost the productivity of your business model.',
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
          title: 'Predictive model',
          content:
            `At Lucro, we turn data collection on product and consumer behavior into a powerful tool for CPGs. Our technology enables real-time information capture, allowing companies to anticipate trends and boost their sales.`,
        },
      },
      {
        name: 'bigData',
        img: {
          imgFocus: '/assets/images/tecnologia/bigData/bigDataMarco.png',
          imgIcon: '/assets/images/tecnologia/bigData/bigDataMarcoIcono.svg',
        },
        card: {
          img: '/assets/images/tecnologia/bigData/bigDataIcono.svg',
          title: 'Big Data',
          content:
            'The exponential growth of daily updated data capture allows us to execute corrective and predictive models with real-time technological infrastructure for the creation of management reports that facilitate decision-making.',
        },
      },
    ],
  };

  constructor() { }

  async get(): Promise<Tecnologia> {
    return this.data;
  }
}
