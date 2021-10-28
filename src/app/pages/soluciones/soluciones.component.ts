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
  public soluciones: any;
  public buttons: any = document.querySelectorAll('.nav-button');
  public currentSel: String = 'machineLearning';
  public active: any = {};
  public show: any = {};

  constructor(private service: CmsService) {}

  async ngOnInit() {
    window.scrollTo(0, 0);
    const p = await this.service.get();
    this.soluciones = p.Soluciones;
    this.machineLearning =
      p.Soluciones?.find((item) => item.name == 'machineLearning') || {};
    this.solucionesDashboard =
      p.Soluciones?.find((item) => item.name == 'solucionesDashboard') || {};
    this.solucionesRPA =
      p.Soluciones?.find((item) => item.name == 'solucionesRPA') || {};
    this.investigacionSegmentada =
      p.Soluciones?.find((item) => item.name == 'investigacionSegmentada') ||
      {};
    this.evaluacionDesempeno =
      p.Soluciones?.find((item) => item.name == 'evaluacionDesempeno') || {};
    this.codigosQR =
      p.Soluciones?.find((item) => item.name == 'codigosQR') || {};
    this.realidadAumentada =
      p.Soluciones?.find((item) => item.name == 'realidadAumentada') || {};
    this.ads = p.Soluciones?.find((item) => item.name == 'ads') || {};
    this.scraper = p.Soluciones?.find((item) => item.name == 'scraper') || {};
    this.chatbot = p.Soluciones?.find((item) => item.name == 'chatbot') || {};
  }

  ngAfterViewInit() {
    this.active = document.querySelector('.active');
    this.show = document.querySelector('.show');
  }
}
