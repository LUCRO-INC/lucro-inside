import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  private l = document.querySelector('#L');
  private lc = document.querySelector('#Lc');
  private u = document.querySelector('#U');
  private uc = document.querySelector('#Uc');
  private c = document.querySelector('#C');
  private cc = document.querySelector('#Cc');
  private r = document.querySelector('#R');
  private rc = document.querySelector('#Rc');
  private o = document.querySelector('#O');
  private oc = document.querySelector('#Oc');

  public timer:number = 0;

  @ViewChild('L')
  L: ElementRef = {} as ElementRef;
  @ViewChild('U')
  U: ElementRef = {} as ElementRef;
  @ViewChild('C')
  C: ElementRef = {} as ElementRef;
  @ViewChild('R')
  R: ElementRef = {} as ElementRef;
  @ViewChild('O')
  O: ElementRef = {} as ElementRef;

  public hasMenu: boolean = false;
  public hasFooter: boolean = false;
  public observer: any;
  public actives = document.querySelectorAll('.active');

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.sliderTimer();
    this.intersectionObserver();
  }

  ngAfterViewInit():void {
    this.observer.observe(this.L.nativeElement);
    this.observer.observe(this.U.nativeElement);
    this.observer.observe(this.C.nativeElement);
    this.observer.observe(this.R.nativeElement);
    this.observer.observe(this.O.nativeElement);
  }

  goToL() {
    this.L.nativeElement.scrollIntoView({block: "end", inline: "center", behavior: "smooth"});
    this.timer = 0;
    let actives = document.querySelectorAll('.active');
    actives.forEach(a => {
      a.classList.remove('active')
    })
    let l = document.querySelector('#L');
    l?.classList.add('active')
    let lc = document.querySelector('#Lc');
    lc?.classList.add('active')
  }
  goToU() {
    this.U.nativeElement.scrollIntoView({block: "end", inline: "center", behavior: "smooth"});
    this.timer = 1;
    let actives = document.querySelectorAll('.active');
    actives.forEach(a => {
      a.classList.remove('active')
    })
    let u = document.querySelector('#U');
    u?.classList.add('active')
    let uc = document.querySelector('#Uc');
    uc?.classList.add('active')
  }
  goToC() {
    this.C.nativeElement.scrollIntoView({block: "end", inline: "center", behavior: "smooth"});
    this.timer = 2;
    let actives = document.querySelectorAll('.active');
    actives.forEach(a => {
      a.classList.remove('active')
    })
    let c = document.querySelector('#C');
    c?.classList.add('active')
    let cc = document.querySelector('#Cc');
    cc?.classList.add('active')
  }
  goToR() {
    this.R.nativeElement.scrollIntoView({block: "end", inline: "center", behavior: "smooth"});
    this.timer = 3;
    let actives = document.querySelectorAll('.active');
    actives.forEach(a => {
      a.classList.remove('active')
    })
    let r = document.querySelector('#R');
    r?.classList.add('active')
    let rc = document.querySelector('#Rc');
    rc?.classList.add('active')
  }
  goToO() {
    this.O.nativeElement.scrollIntoView({block: "end", inline: "center", behavior: "smooth"});
    this.timer = 4;
    let actives = document.querySelectorAll('.active');
    actives.forEach(a => {
      a.classList.remove('active')
    })
    let o = document.querySelector('#O');
    o?.classList.add('active')
    let oc = document.querySelector('#Oc');
    oc?.classList.add('active')
  }

  sliderTimer() {
    setInterval(() => {
      if(this.timer == 0){
        this.goToU();
      } else if (this.timer == 1) {
        this.goToC();
      } else if (this.timer == 2) {
        this.goToR();
      } else if (this.timer == 3) {
        this.goToO();
      } else if (this.timer == 4) {
        this.goToL();
      }
    },4000)
  }

  intersectionObserver() {
    let options = {
      root: document.querySelector('#viewTarget'),
      rootMargin: '0px',
      treshold: 0.5
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        let actives = document.querySelectorAll('.active');
        actives.forEach(a => {
          a.classList.remove('active')
        })
        entry.target.classList.add('active')
      })
    }, options)
  }

}
