import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/@core/models/customersModels/article';
import { Category } from 'src/app/@core/models/customersModels/category';
import { CustomerService } from 'src/app/@core/services/customers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit, AfterViewInit {

  public loading: boolean = true;
  public article: any;
  public articles: Article[] = [];
  public categories:Category[] = [];
  environmentUrl = environment.url;
  actualPage: number = 1;
  timeOut:any;
  url:string = '';
  bannerSource:string = '';
  plotSource:string = '';

  categoryImages = [
    {
      id: "1",
      source: "/assets/images/consumidores/article/categoryImages/medio-ambiente.png"
    },
    {
      id: "2",
      source: "/assets/images/consumidores/article/categoryImages/demografia.png"
    },
    {
      id: "3",
      source: "/assets/images/consumidores/article/categoryImages/consumo.png"
    },
    {
      id: "4",
      source: "/assets/images/consumidores/article/categoryImages/somos-lucro.png"
    },
    {
      id: "5",
      source: "/assets/images/consumidores/article/categoryImages/ellos-hablan.png"
    }
  ]

  articlePlots = [
    {
      id: "2",
      source: "/assets/images/consumidores/article/plotStats/Lo que más le inquieta al colombiano frente a la contaminación.png"
    },
    {
      id: "3",
      source: "/assets/images/consumidores/article/plotStats/Aceite de cocina, un contaminante desconocido.png"
    },
    {
      id: "4",
      source: "/assets/images/consumidores/article/plotStats/Manejo de residuos, una labor que se considera insufienciente.png"
    },
    {
      id: "5",
      source: "/assets/images/consumidores/article/plotStats/Población Lucro.png"
    },
    {
      id: "6",
      source: "/assets/images/consumidores/article/plotStats/Las mascotas reinan en los hogares colombianos.png"
    },
    {
      id: "7",
      source: "/assets/images/consumidores/article/plotStats/Las mascotas preferidas por los colombianos.png"
    },
    {
      id: "8",
      source: "/assets/images/consumidores/article/plotStats/Marcada presencia de mascotas en hogares sin hijos.png"
    },
    {
      id: "9",
      source: "/assets/images/consumidores/article/plotStats/Lo que dicen las personas sobre su orientación sexual en Colombia.png"
    },
    {
      id: "10",
      source: "/assets/images/consumidores/article/plotStats/La comunidad LGBTI y un concepto desconocido.png"
    },
    {
      id: "11",
      source: "/assets/images/consumidores/article/plotStats/La homofobia está presente incluso en la comunidad LGBTI.png"
    },
    {
      id: "12",
      source: "/assets/images/consumidores/article/plotStats/Los tenderos, un gremio que lucha por su subsistencia.png"
    },
    {
      id: "13",
      source: "/assets/images/consumidores/article/plotStats/Cada cuánto hacen mercado los colombianos.png"
    },
    {
      id: "14",
      source: "/assets/images/consumidores/article/plotStats/Hacer mercado en Colombia, según el estrato.png"
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  async ngOnInit() {
    window.scroll(0,0);
    this.articles = await this.customerService.getArticles().toPromise();
    this.categories = await this.customerService.getCategories().toPromise();
    this.route.params.subscribe(async (params: Params) => {
      const id = params.id;
      const data = await this.customerService.getArticleById(id).toPromise();
      this.article = data;
      if (!this.article) {
        alert('not an article');
      } else {
        this.loading = false;
      }
      if (this.article[0].imagen) {
        this.url = environment.url + this.article[0].imagen;
      } else {
        this.url = '/assets/imageNotFound.svg';
      }
      this.categoryImages.forEach((img) => {
        if (img.id === this.article[0].categoria) {
          this.bannerSource = img.source;
        }
      })
      this.articlePlots.forEach((plot) => {
        if (plot.id === this.article[0].id) {
          this.plotSource = plot.source;
        }
      })
      this.articles.forEach((article) => {
        this.categories.find((category) => {
          if(category.id === article.categoria) {
            return article.categoria = category.nombre
          } else {
            return null;
          }
        })
      })
    })
  }

  ngAfterViewInit(): void {
  }

  goToTop() {
    window.scroll(0,0);
  }

}
