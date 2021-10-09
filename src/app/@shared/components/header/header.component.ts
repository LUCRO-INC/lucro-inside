import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clickHamburger(): void {
    alert('Algo significativo');
  }

  constructor() { }

  ngOnInit(): void {
  }
}
