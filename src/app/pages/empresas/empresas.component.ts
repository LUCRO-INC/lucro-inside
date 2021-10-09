import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  public sectionOne:Section = {}
  public sectionTwo:Section = {}
  public sectionThree:Section = {}
  public sectionFour:Section = {}

  constructor(private service:CmsService) { }

  async ngOnInit() {
    const p = await this.service.get()
    this.sectionOne = p.Empresas?.find(item => item.name == 'sectionOne') || {}
    this.sectionTwo = p.Empresas?.find(item => item.name == 'sectionTwo') || {}
    this.sectionThree = p.Empresas?.find(item => item.name == 'sectionThree') || {}
    this.sectionFour = p.Empresas?.find(item => item.name == 'sectionFour') || {}
  }

}
