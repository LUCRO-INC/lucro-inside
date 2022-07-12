import { TypeScriptEmitter } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, {
  Virtual,
  SwiperOptions,
  Pagination,
  Autoplay,
} from 'swiper';
import { SwiperEvents } from 'swiper/types';

SwiperCore.use([Pagination, Autoplay, Virtual]);

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
})
export class PreguntasComponent implements OnInit {
  @Input() preguntas: String[] | undefined;

  config: SwiperOptions;

  constructor() {
    this.config = {
      direction: 'vertical',
      loop: true,
      slidesPerView: 3,
      pagination: false,
      spaceBetween: 15,
      autoplay: {
        disableOnInteraction: false,
        delay: 3000,
        pauseOnMouseEnter: false,
      },
      observer: true,
      observeParents: true,
      slideClass: 'question',
    };
  }

  async ngOnInit() {
    window.scroll(0, 0);
    this.config.loopedSlides = this.preguntas?.length;
    this.config.loopAdditionalSlides = this.preguntas?.length;
  }

  onSwiper(event: SwiperEvents) {
    /* console.log(event); */
  }
  onSlideChange() {
    /* console.log('slide change'); */
  }
}
