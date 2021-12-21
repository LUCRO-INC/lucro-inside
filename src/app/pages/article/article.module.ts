import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    NgxPaginationModule
  ]
})
export class ArticleModule { }
