import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/@core/models/customersModels/article';
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
  public articles: Array<Article> = [];
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
  }

  goToTop() {
    window.scroll(0,0);
  }

}
