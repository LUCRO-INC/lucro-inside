import { Injectable } from '@angular/core';
import { Customers } from '../models/customersModels/customers';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private data:Customers = {
    slider: [
      {
        name: "slideOne",
        title: "Redefinimos la relación entre empresas, consumidores y puntos de venta",
        images: [
          {
            id: 1,
            src: "../../../assets/images/consumidores/slide01/Ellipse 2076.svg",
            class: "slideOne__image1"
          },
          {
            id: 2,
            src: "../../../assets/images/consumidores/slide01/Group 31.svg",
            class: "slideOne__image2"
          },
          {
            id: 3,
            src: "../../../assets/images/consumidores/slide01/image 39.svg",
            class: "slideOne__image3"
          }
        ],
        imageClass: "slideOne__image"
      },
      {
        name: "slideTwo",
        category: "Medio ambiente",
        title: "Lo que más le inquieta al colombiano frente a la contaminación ",
        subtitle: "Lo que más preocupa a los colombianos es que el agua suministrada a la población sea segura.",
        images: [
          {
            id: 1,
            src: "../../../assets/images/consumidores/slide02/Frame.png",
            class: "slideTwo__image1"
          },
          {
            id: 2,
            src: "../../../assets/images/consumidores/slide02/Ellipse 42.svg",
            class: "slideTwo__image2"
          },
          {
            id: 3,
            src: "../../../assets/images/consumidores/slide02/Ellipse 41.svg",
            class: "slideTwo__image3"
          }
        ],
        imageClass: "slideTwo__image",
        button: 'Ver informe'
      },
      {
        name: "slideThree",
        category: "Demografía",
        title: "Los tenderos, un gremio que lucha por su subsistencia.",
        subtitle: "Un estudio reciente de la Federación Nacional de Comerciantes Fenalco.",
        images: [
          {
            id: 1,
            src: "../../../assets/images/consumidores/slide03/Group 31.svg",
            class: "slideThree__image1"
          },
          {
            id: 2,
            src: "../../../assets/images/consumidores/slide03/Frame-slide03.png",
            class: "slideThree__image2"
          },
          {
            id: 3,
            src: "../../../assets/images/consumidores/slide03/Group 1370.svg",
            class: "slideThree__image3"
          },
          {
            id: 4,
            src: "../../../assets/images/consumidores/slide03/Ellipse 42.svg",
            class: "slideThree__image4"
          }
        ],
        imageClass: "slideThree__image",
        button: 'Ver informe'
      }
    ]
  }

  constructor() {}

  async get(): Promise<any> {
    return this.data;
  }
}
