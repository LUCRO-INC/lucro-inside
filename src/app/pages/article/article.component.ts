import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/@core/models/customersModels/article';
import { CustomerService } from '../../@core/services/customers.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article:any;
  public articles:any;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(async (params: Params) => {
      const id = params.id;
      this.article = await this.customerService.getArticle(id);
    });
    const p = this.customerService.getArticles()
    this.articles = p || [];
    console.log(this.articles);
  }

}
