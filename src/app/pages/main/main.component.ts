import { Component, OnInit } from '@angular/core';
import { Cms } from 'src/app/@core/models/cms';
import { Section } from 'src/app/@core/models/section';
import { CmsService } from 'src/app/@core/services/cms.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public info: Cms = {};

  constructor(private service: CmsService) { }

  async ngOnInit() {
    this.info = await this.service.get();
  }

  getData(name: String): Section {
    const res = this.info.home?.find(item => item.name == name)
    return res ? res : {}
  }

}
