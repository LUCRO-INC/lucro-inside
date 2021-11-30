import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CustomerService } from '../../@core/services/customers.service';
import { Article } from '../../@core/models/customersModels/article';
import { Slider } from '../../@core/models/customersModels/slider';
import SwiperCore, { Swiper, SwiperOptions, Pagination, Autoplay, Navigation } from 'swiper';
import { environment } from 'src/environments/environment';

SwiperCore.use([Pagination, Autoplay, Navigation]);


@Component({
  selector: 'app-consumidores',
  templateUrl: './consumidores.component.html',
  styleUrls: ['./consumidores.component.scss']
})
export class ConsumidoresComponent implements OnInit, AfterViewInit {

  public articles:Article[] = [];
  public slider:Slider []= [];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: { dynamicBullets: true, clickable: true },
    scrollbar: { draggable: true },
    autoplay: false/*{ disableOnInteraction: false, delay: 2500, pauseOnMouseEnter: true }*/,
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    }
    //slideClass: 'swipper-slide-custom'
  };

  constructor(
    private http:HttpClient,
    private service:CustomerService
  ) { }

  async ngOnInit() {
    window.scrollTo(0,0);
    const p = await this.service.get();
    this.slider = p.slider || [];
    this.getArticles()
      .subscribe(data => {
        this.articles = data;
      })
  }

  ngAfterViewInit() {
    console.log(this.articles)

  }

  getCategories() {
    return this.http.get(environment.url + 'categorias.php');
  }

  getArticles() {
    return this.http.get<Article[]>(environment.url + 'blog.php');
  }

  onSwiper(swiper: Swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
