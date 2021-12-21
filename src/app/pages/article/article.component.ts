import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
export class ArticleComponent implements OnInit {

  public article: any;
  public articles: Article[] = [];
  public categories:Category[] = [];
  environmentUrl = environment.url;
  actualPage: number = 1;
  timeOut:any;
  url:string = '';

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
      if (this.article[0].imagen) {
        this.url = environment.url + this.article[0].imagen;
      } else {
        this.url = '/assets/imageNotFound.svg';
      }
    });
    this.articles.forEach((article) => {
      this.categories.find((category) => {
        if(category.id === article.categoria) {
          return article.categoria = category.nombre
        } else {
          return null;
        }
      })
    })
  }

  goToTop() {
    window.scroll(0,0);
  }

}
