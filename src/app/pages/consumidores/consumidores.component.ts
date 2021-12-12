import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
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

  // @ViewChildren('.track')
  // track: ElementRef[]

  public articles:Article[] = [];
  public categories:Category[] = [];
  public slider:Slider []= [];
  public observer: any;
  public slideOne: Slider = {
    name: '',
    class: '',
    title: '',
    images: [],
    imageClass: '',
  };
  public slideTwo: Slider = {
    name: '',
    class: '',
    title: '',
    images: [],
    imageClass: '',
  };
  public slideThree: Slider = {
    name: '',
    class: '',
    title: '',
    images: [],
    imageClass: '',
  };

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
    this.articles = await this.service.getArticles().toPromise();
    this.categories = await this.service.getCategories().toPromise();
    this.slider = p.slider || [];
    // this.slideOne = p.slider?.find(item => item.name == 'slideOne') || {}
  }

  ngAfterViewInit() {
    this.slider.forEach(slide => {
      this.observer.observe(slide);
    })
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      treshold: 0.2,
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, options);
  }

  onSwiper(swiper: Swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }

}
