import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CustomerService } from 'src/app/@core/services/customers.service';
import { Article } from 'src/app/@core/models/customersModels/article';
import { Category } from 'src/app/@core/models/customersModels/category';
import { Slider } from 'src/app/@core/models/customersModels/slider';
import SwiperCore, { Swiper, SwiperOptions, Pagination, Autoplay, Navigation } from 'swiper';
import { environment } from 'src/environments/environment';

SwiperCore.use([Pagination, Autoplay, Navigation]);


@Component({
  selector: 'app-consumidores',
  templateUrl: './consumidores.component.html',
  styleUrls: ['./consumidores.component.scss']
})
export class ConsumidoresComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('gridContainer')
  gridContainer: ElementRef = {} as ElementRef;
  @ViewChild('myCategory')
  myCategory: ElementRef = {} as ElementRef;

  public fullArray:Article[] = [];

  public articles:Article[] = [];
  public categories:Category[] = [];
  public slider:Slider []= [];
  public categorySelector: any;
  public observer: any;
  public id: any;
  public article: any;
  categorySelectorCoordinates: any;
  environmentUrl = environment.url;
  actualPage: number = 1;
  categorySelected: Boolean = false;
  active: any;

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: { dynamicBullets: true, clickable: true },
    scrollbar: { draggable: true },
    autoplay: { disableOnInteraction: false, delay: 3500, pauseOnMouseEnter: true },
    navigation: {
      nextEl: '.arrow-right',
      prevEl: '.arrow-left',
    }
  };

  constructor(
    private service:CustomerService
  ) {
  }

  async ngOnInit() {
    window.scrollTo(0,0);
    this.onInit();
    this.intersectionObserver();
    const p = await this.service.get();
    this.slider = await p.slider || [];
    this.articles = await this.service.getArticles().toPromise();
    this.categories = await this.service.getCategories().toPromise();
    this.articles.forEach((article) => {
      this.categories.find((category) => {
        if(category.id === article.categoria) {
          return article.categoria = category.nombre
        } else {
          return null;
        }
      })
    })
    this.fullArray = this.articles;
    this.categorySelector = document.getElementById('categorySelector');
    this.categorySelectorCoordinates = this.categorySelector?.getBoundingClientRect().y + window.scrollY;
  }

  ngAfterViewInit() {
    this.observer.observe(this.gridContainer.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  onPageChange(page: number) {
    this.actualPage = page;window.scrollTo({
      top: this.categorySelectorCoordinates + -75,
      left: 0,
      behavior: 'smooth'
    });
  }

  categoryFilter(text: String, event: Event) {
    let links = document.querySelectorAll('.catetegory-selector__list__link');
    let currentLink = event.target as Element;
    links.forEach((link) => {
      if(link.classList.contains('active')) {
        link.classList.remove('active');
      }
    })
    currentLink?.classList.add('active')
    this.actualPage = 1;
    if (this.categorySelected === false) {
      const filteredArticles = this.articles.filter((article) => article.categoria.toLowerCase() === text.toLowerCase())
      this.articles = filteredArticles;
      this.categorySelected = true;
    } else {
      this.articles = this.fullArray;
      const filteredArticles = this.articles.filter((article) => article.categoria.toLowerCase() === text.toLowerCase())
      this.articles = filteredArticles;
    }
  }

  clearArray(event: Event): void {
    this.actualPage = 1;
    let links = document.querySelectorAll('.catetegory-selector__list__link');
    let currentLink = event.target as Element;
    links.forEach((link) => {
      if(link.classList.contains('active')) {
        link.classList.remove('active');
      }
    })
    currentLink?.classList.add('active')
    this.articles = this.fullArray;
    this.categorySelected = false;
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
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
  }

  onInit() {
    this.id = setTimeout(() => {
      let slideActive = document.getElementsByClassName('swiper-slide swiper-slide-active').item(0);
      slideActive?.classList.add('show');
    }, 1200);
  }

  onSlideChange() {
    let slideNext = document.getElementsByClassName('swiper-slide swiper-slide-next').item(0);
    slideNext?.classList.add('show');
  }

}
