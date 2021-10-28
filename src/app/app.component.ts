import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: any
  public hasMenu: boolean = true;
  public hasFooter: boolean = true;

  public onActivate(elementRef: any) {
    if (elementRef.hasMenu != undefined) {
      this.hasMenu = elementRef.hasMenu;
    } else {
      this.hasMenu = true;
    }
    if (elementRef.hasFooter != undefined) {
      this.hasFooter = elementRef.hasFooter;
    } else {
      this.hasFooter = true;
    }
  }
}
