import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { getLocaleDirection } from '@angular/common';
import { ClientsImg } from 'src/app/@core/models/clients-img';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-ngx-glide',
  templateUrl: './ngx-glide.component.html',
  styleUrls: ['./ngx-glide.component.scss']
})
export class NgxGlideComponent implements OnInit {
  @ViewChild(NgxGlideComponent)
  ngxGlide: NgxGlideComponent = {} as NgxGlideComponent;
  public clientes:any;

  play(): void {
    this.ngxGlide.play();
  }

  constructor(private service:CmsService) { }

  async ngOnInit() {
    const p = await this.service.get()
    this.clientes = p.Clientes
  }
}
