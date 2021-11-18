import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SolucionesSection } from 'src/app/@core/models/solucionesSection';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss'],
})
export class SolucionesComponent implements OnInit, AfterViewInit {
  public clickArrow: boolean = false;

  // public hasFooter: boolean = false;

  public sections:Array<ElementRef> = [];

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

  constructor(private service: CmsService) {}

  async ngOnInit() {
    this.intersectionObserver();
    window.scrollTo(0, 0);
    const p = await this.service.get();
    this.soluciones = p.Soluciones || [];
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
    ]
  }

  goToSection(solucionLabel: String) {
    this.soluciones.forEach((s, idx) => {
      if(s.label == solucionLabel) {
        this.sections[idx].nativeElement.scrollIntoView(true);
      }
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
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.toggle('active');
        entry.target.classList.toggle('show');
        this.observer.unobserve(entry.target);
      });
    }, options);
  }
}
