import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { SolucionesSection } from 'src/app/@core/models/solucionesSection';
import { CmsService } from 'src/app/@core/services/cms.service';
import {
  fadeinLeft,
  fadeinRight,
  questionsFade,
  evaluacionDesempenoImageAnimation,
} from 'src/app/@shared/animations';

import SwiperCore, {
  Swiper,
  SwiperOptions,
  Pagination,
  Autoplay,
} from 'swiper';
import swiper from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss'],
  animations: [
    fadeinLeft,
    fadeinRight,
    questionsFade,
    evaluacionDesempenoImageAnimation,
  ],
})
export class SolucionesComponent implements OnInit, AfterViewInit, OnDestroy {
  public clickArrow: boolean = false;

  public timer: number = 0;

  public sections: Array<ElementRef> = [];

  @ViewChild('section01')
  section01: ElementRef = {} as ElementRef;
  @ViewChild('section02')
  section02: ElementRef = {} as ElementRef;
  @ViewChild('section03')
  section03: ElementRef = {} as ElementRef;
  @ViewChild('section04')
  section04: ElementRef = {} as ElementRef;
  @ViewChild('section05')
  section05: ElementRef = {} as ElementRef;
  @ViewChild('section06')
  section06: ElementRef = {} as ElementRef;
  @ViewChild('section07')
  section07: ElementRef = {} as ElementRef;
  @ViewChild('section08')
  section08: ElementRef = {} as ElementRef;
  @ViewChild('section09')
  section09: ElementRef = {} as ElementRef;
  @ViewChild('section10')
  section10: ElementRef = {} as ElementRef;

  public machineLearning: SolucionesSection = {};
  public solucionesDashboard: SolucionesSection = {};
  public solucionesRPA: SolucionesSection = {};
  public investigacionSegmentada: SolucionesSection = {};
  public evaluacionDesempeno: SolucionesSection = {};
  public codigosQR: SolucionesSection = {};
  public realidadAumentada: SolucionesSection = {};
  public ads: SolucionesSection = {};
  public scraper: SolucionesSection = {};
  public chatbot: SolucionesSection = {};
  public soluciones: Array<any> = [];
  public buttons: any = document.querySelectorAll('.nav-button');
  public currentSel: String = 'machineLearning';
  public observer: any;
  public footerObserver: any;
  public navbar: any;

  private id: any;
  private footer: any;
  private windowWidth: number = 320;
  private spaceBetween: number = 27;

  evaluacionDesempenoQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  machineLearningQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  solucionesDashboardQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  solucionesRPAQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  investigacionSegmentadaQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  codigosQRQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  realidadAumentadaQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  adsQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 4,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  scraperQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  chatbotQuestionsConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    spaceBetween: this.spaceBetween,
    pagination: false,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      pauseOnMouseEnter: false,
    },
    observer: true,
    observeParents: true,
    slideClass: 'questions__item',
  };

  carouselConfig: SwiperOptions = {
    direction: 'vertical',
    loop: true,
    loopedSlides: 10,
    slidesPerView: 10,
    centeredSlides: true,
    scrollbar: { draggable: false },
    slideToClickedSlide: true,
    spaceBetween: 10,
    pagination: false,
    autoplay: false,
    observer: true,
    observeParents: true,
    wrapperClass: 'swiper-wrapper-navbar',
    slideClass: 'navbar__item',
    breakpoints: {
      992: {
        spaceBetween: 8,
      },
      1400: {
        spaceBetween: 10,
      },
    },
  };

  constructor(private service: CmsService) {}

  async ngOnInit() {
    // this.sliderTimer();
    window.scrollTo(0, 0);
    const p = await this.service.get();
    this.soluciones = p.Soluciones || [];
    this.navbar = document.querySelector('#mainNavbar');
    this.evaluacionDesempeno =
      p.Soluciones?.find((item) => item.name == 'evaluacionDesempeno') || {};
    this.machineLearning =
      p.Soluciones?.find((item) => item.name == 'machineLearning') || {};
    this.solucionesDashboard =
      p.Soluciones?.find((item) => item.name == 'solucionesDashboard') || {};
    this.solucionesRPA =
      p.Soluciones?.find((item) => item.name == 'solucionesRPA') || {};
    this.investigacionSegmentada =
      p.Soluciones?.find((item) => item.name == 'investigacionSegmentada') ||
      {};
    this.codigosQR =
      p.Soluciones?.find((item) => item.name == 'codigosQR') || {};
    this.realidadAumentada =
      p.Soluciones?.find((item) => item.name == 'realidadAumentada') || {};
    this.ads = p.Soluciones?.find((item) => item.name == 'ads') || {};
    this.scraper = p.Soluciones?.find((item) => item.name == 'scraper') || {};
    this.chatbot = p.Soluciones?.find((item) => item.name == 'chatbot') || {};
  }

  ngAfterViewInit() {
    this.footer = document.querySelector('.footer');
    this.intersectionObserver();
    this.footerObserver.observe(this.footer);
    this.observer.observe(this.section01.nativeElement);
    this.observer.observe(this.section02.nativeElement);
    this.observer.observe(this.section03.nativeElement);
    this.observer.observe(this.section04.nativeElement);
    this.observer.observe(this.section05.nativeElement);
    this.observer.observe(this.section06.nativeElement);
    this.observer.observe(this.section07.nativeElement);
    this.observer.observe(this.section08.nativeElement);
    this.observer.observe(this.section09.nativeElement);
    this.observer.observe(this.section10.nativeElement);
    this.sections = [
      this.section01,
      this.section02,
      this.section03,
      this.section04,
      this.section05,
      this.section06,
      this.section07,
      this.section08,
      this.section09,
      this.section10,
    ];
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  goToSection(solucionLabel: String, event: any) {
    let navbarItems = document.querySelectorAll('.nav-button');
    event.target?.classList.add('highlighted');
    navbarItems.forEach((item) => {
      if (item.classList.contains('highlighted') && item !== event.target) {
        item.classList.remove('highlighted');
      }
    });
    this.soluciones.forEach((s, idx) => {
      if (s.label == solucionLabel) {
        this.sections[idx].nativeElement.scrollIntoView({ block: 'start' });
      }
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let sectionTarget: any = entry.target;
          let sectionLabel: string = sectionTarget.ariaLabel;
          sectionTarget.classList.add('active');
          sectionTarget.classList.add('show');
          let navbarItems = document.querySelectorAll('.nav-button');
          navbarItems.forEach((item: any) => {
            let navbarLabel = item.innerText;
            let activeTags: Array<Element> = [];
            if (
              navbarLabel === sectionLabel &&
              !item.parentElement.classList.contains('swiper-slide-duplicate')
            ) {
              item.click();
            }
          });
          this.clickArrow = false;
        }
      });
    }, options);
    this.footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.navbar?.classList.add('float');
        } else {
          this.navbar?.classList.remove('float');
        }
      });
    }, options);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event: Event) {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 576) {
      this.spaceBetween = 29.7;
    }
    if (this.windowWidth > 768) {
      this.spaceBetween = 35.1;
    }
    if (this.windowWidth > 1400) {
      this.spaceBetween = 50;
    } else {
      this.spaceBetween = 27;
    }
    // console.log(this.windowWidth, this.spaceBetween);
  }

  onSwiper(swiper: Swiper) {
    // console.log(swiper);
  }
  onSlideChange() {
    // console.log('slide change');
  }
}
