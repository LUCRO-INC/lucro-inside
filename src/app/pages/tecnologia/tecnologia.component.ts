import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TechCmsService } from 'src/app/@core/services/techCms.service';
import { Tecnologia } from 'src/app/@core/models/techModels/tecnologia';
import { TecnologiaSection } from 'src/app/@core/models/techModels/tecnologiaSection';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss'],
})
export class TecnologiaComponent implements OnInit, AfterViewInit {
  public techContent: Tecnologia = {};
  public gamificacion: TecnologiaSection = {};
  public scrapper: TecnologiaSection = {};
  public identificadorImagenes: TecnologiaSection = {};
  public automatizacionRPA: TecnologiaSection = {};
  public modelosPredictivos: TecnologiaSection = {};
  public bigData: TecnologiaSection = {};
  public mobiles:NodeList = {} as NodeList;
  public counter:number = 1;

  constructor(private service: TechCmsService) {
  }

  async ngOnInit() {
    window.scrollTo(0, 0);
    const p = await this.service.get();
    this.techContent = p || {};
    this.gamificacion =
      p.content?.find((item) => item.name == 'gamificacion') || {};
    this.scrapper = p.content?.find((item) => item.name == 'scrapper') || {};
    this.identificadorImagenes =
      p.content?.find((item) => item.name == 'identificadorImagenes') || {};
    this.automatizacionRPA =
      p.content?.find((item) => item.name == 'automatizacionRPA') || {};
    this.modelosPredictivos =
      p.content?.find((item) => item.name == 'modelosPredictivos') || {};
      this.bigData = p.content?.find((item) => item.name == 'bigData') || {};
    }

  ngAfterViewInit() {
  }

  goNext() {
    this.mobiles = document.querySelectorAll('.mobiles-slider__item');
    let firstElement = this.mobiles.item(0);
    firstElement?.parentNode?.append(firstElement);
    let active = document.querySelectorAll('.text-card.active')[0];
    let next: any = active.nextElementSibling? active.nextElementSibling : null;
    if (next == null) {
      let restart = document.getElementById('tcContainer')?.firstElementChild;
      next = restart
    }
    active.classList.remove('active');
    next?.classList.add('active');
  }

  goBack() {
    this.mobiles = document.querySelectorAll('.mobiles-slider__item');
    let i = this.mobiles.length - 1;
    let lastElement = this.mobiles.item(i);
    lastElement?.parentNode?.prepend(lastElement);
    let active = document.querySelectorAll('.text-card.active')[0];
    let prev: any = active.previousElementSibling? active.previousElementSibling : null;
    if (prev == null) {
      let restart = document.getElementById('tcContainer')?.lastElementChild;
      prev = restart
    }
    active.classList.remove('active');
    prev?.classList.add('active');
  }
}
