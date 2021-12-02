import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Customers } from '../models/customersModels/customers';
import { Article } from '../../@core/models/customersModels/article';
import { Category } from '../../@core/models/customersModels/category';
import { map, filter, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  public articles: Article[] = [];
  public categories: Category[] = [];

  private data: Customers = {
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
    ],
    articles: this.articles,
    categories: this.categories
  }

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    return this.http.get<Category[]>(environment.url + 'categorias.php');
  }

  getArticles() {
    return this.http.get<Article[]>(environment.url + 'blog.php');
  }

  async getArticle(id: String): Promise<any> {
    const articles = await this.getArticles().toPromise()
    return articles.find(article => id === article.id);
  }

  async get(): Promise<any> {
    return this.data;
  }
}
