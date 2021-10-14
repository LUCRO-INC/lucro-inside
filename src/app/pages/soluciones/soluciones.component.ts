import { Component, OnInit } from '@angular/core';
import { SolucionesSection } from 'src/app/@core/models/solucionesSection';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-soluciones',
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.scss']
})
export class SolucionesComponent implements OnInit {

  public machineLearning:SolucionesSection = {}
  public solucionesDashboard:SolucionesSection = {}
  public solucionesRPA:SolucionesSection = {}
  public investigacionSegmentada:SolucionesSection = {}
  public evaluacionDesempeno:SolucionesSection = {}
  public codigosQR:SolucionesSection = {}
  public realidadAumentada:SolucionesSection = {}
  public ads:SolucionesSection = {}
  public scraper:SolucionesSection = {}
  public chatbot:SolucionesSection = {}

  constructor(private service:CmsService) { }

  async ngOnInit() {
    window.scrollTo(0, 0);
    const p = await this.service.get()
    this.machineLearning = p.Soluciones?.find(item => item.name == 'machineLearning') || {}
    this.solucionesDashboard = p.Soluciones?.find(item => item.name == 'solucionesDashboard') || {}
    this.solucionesRPA = p.Soluciones?.find(item => item.name == 'solucionesRPA') || {}
    this.investigacionSegmentada = p.Soluciones?.find(item => item.name == 'investigacionSegmentada') || {}
    this.evaluacionDesempeno = p.Soluciones?.find(item => item.name == 'evaluacionDesempeno') || {}
    this.codigosQR = p.Soluciones?.find(item => item.name == 'codigosQR') || {}
    this.realidadAumentada = p.Soluciones?.find(item => item.name == 'realidadAumentada') || {}
    this.ads = p.Soluciones?.find(item => item.name == 'ads') || {}
    this.scraper = p.Soluciones?.find(item => item.name == 'scraper') || {}
    this.chatbot = p.Soluciones?.find(item => item.name == 'chatbot') || {}
  }

}
