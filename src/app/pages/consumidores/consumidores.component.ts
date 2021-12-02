import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CustomerService } from '../../@core/services/customers.service';
import { Article } from '../../@core/models/customersModels/article';
import { Category } from '../../@core/models/customersModels/category';
import { Slider } from '../../@core/models/customersModels/slider';
import SwiperCore, { Swiper, SwiperOptions, Pagination, Autoplay, Navigation } from 'swiper';

SwiperCore.use([Pagination, Autoplay, Navigation]);


@Component({
  selector: 'app-consumidores',
  templateUrl: './consumidores.component.html',
  styleUrls: ['./consumidores.component.scss']
})
export class ConsumidoresComponent implements OnInit, AfterViewInit {

  public articles:Article[] = [];
  public categories:Category[] = [];
  public slider:Slider []= [];

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: { dynamicBullets: true, clickable: true },
    scrollbar: { draggable: true },
    autoplay: { disableOnInteraction: false, delay: 2500, pauseOnMouseEnter: true },
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    }
    //slideClass: 'swipper-slide-custom'
  };

  constructor(
    private service:CustomerService
  ) { }

  async ngOnInit() {
    window.scrollTo(0,0);
    const p = await this.service.get();
    //this.articles = p.articles || [];
    this.articles = await this.service.getArticles().toPromise();
    this.categories = await this.service.getCategories().toPromise();
    this.slider = p.slider || [];
  }

  ngAfterViewInit() {
  }

  onSwiper(swiper: Swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
