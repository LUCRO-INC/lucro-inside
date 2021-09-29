import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/@core/models/section';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() content: Section = {};

  constructor() { }

  ngOnInit(): void {
  }

}
