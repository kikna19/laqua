import {
  Component, ElementRef, Inject, NgZone,
  OnInit,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  ViewChild
} from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/animations';
import {gsap, TimelineMax} from 'gsap';
import {DOCUMENT} from "@angular/common";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {MatDialog} from "@angular/material/dialog";
import {ProductListComponent} from "../laqua-routing/product-list/product-list.component";
import {ProductService} from "../product.service";
import {
  Event, NavigationCancel,
  NavigationEnd,
  NavigationStart,
  Router,

} from "@angular/router";


const importantFlag = RendererStyleFlags2.Important

@Component({
  selector: 'app-laqua-nav',
  templateUrl: './laqua-nav.component.html',
  styleUrls: ['./laqua-nav.component.scss'],
  animations: [
    trigger('hambOne', [
      state('hambOne2', style({})),
      state('hambOne3', style({
        transform: 'translateY(.75rem) rotate(45deg)',
        backgroundColor: 'white',
      })),
      transition('hambOne2 => hambOne3', animate('.5s ease-in-out')),
      transition('hambOne3 => hambOne2', animate('.5s ease-in-out'))
    ]),
    trigger('hambSec', [
      state('hambSec2', style({})),
      state('hambSec3', style({
        opacity: 0
      })),
      transition('hambSec2 => hambSec3', animate('.5s ease-in-out')),
      transition('hambSec3 => hambSec2', animate('.5s ease-in-out'))
    ]),
    trigger('hambThi', [
      state('hambThi2', style({})),
      state('hambThi3', style({
        transform: 'translateY(-.75rem) rotate(-45deg)',
        backgroundColor: 'white',
      })),
      transition('hambThi2 => hambThi3', animate('.5s ease-in-out')),
      transition('hambThi3 => hambThi2', animate('.5s ease-in-out'))
    ]),
    trigger('nav', [
      state('nav2', style({})),
      state('nav3', style({
        backgroundColor: '#071c26'
      })),
      transition('nav2 => nav3', animate('.8s ease-in-out')),
      transition('nav3 => nav2', animate('.8s ease-in-out'))
    ]),
    trigger('logo', [
      state('logo2', style({})),
      state('logo3', style({
        color: 'white'
      })),
      transition('logo2 => logo3', animate('.5s ease-in-out')),
      transition('logo3 => logo2', animate('.5s ease-in-out'))
    ]),
    trigger('drop', [
      state('drop2', style({
        opacity: 0,
      })),
      state('drop3', style({
        opacity: 1,
        zIndex: 100000
      })),
      transition('drop2 => drop3', animate('1s ease-in-out')),
      transition('drop3 => drop2', animate('1s ease-in-out'))
    ]),
    trigger('marine', [
      state('marine2', style({})),
      state('marine3', style({
        opacity: 1
      })),
      transition('marine2 => marine3', animate('1s ease-in-out')),
      transition('marine3 => marine2', animate('.1s ease-in-out'))
    ]),
    trigger('section', [
      state('section2', style({
        zIndex: 0
      })),
      state('section3', style({
        zIndex: -1000000
      })),
      transition('section2 => section3', animate('.1s ease-in-out')),
      transition('section3 => section2', animate('.1s ease-in-out'))
    ]),
  ]
})

export class LaquaNavComponent implements OnInit {
  cart = faShoppingCart;
  search = faSearch;
  hambOne1 = 'hambOne2';
  hambSec1 = 'hambSec2';
  hambThi1 = 'hambThi2';
  nav1 = 'nav2';
  logo1 = 'logo2';
  drop1 = 'drop2';
  marine1 = 'marine2';
  section1 = 'section2';
  tl = gsap.timeline({reversed: true})
  private renderer: Renderer2;
  loader = true;
  @ViewChild('laqua', {static: true}) laqua!: ElementRef
  @ViewChild('aqua', {static: true}) aqua!: ElementRef
  @ViewChild('terra', {static: true}) terra!: ElementRef
  @ViewChild('fitting', {static: true}) fitting!: ElementRef
  @ViewChild('marineF', {static: true}) marineF!: ElementRef
  @ViewChild('fresh', {static: true}) fresh!: ElementRef
  @ViewChild('iFish', {static: true}) iFish!: ElementRef
  @ViewChild('acce', {static: true}) acce!: ElementRef
  @ViewChild('spec', {static: true}) spec!: ElementRef
  @ViewChild('aboutF', {static: true}) aboutF!: ElementRef
  @ViewChild('cont', {static: true}) cont!: ElementRef
  totalItems: number = 0;
  private timeout: number;

  constructor(private dialog: MatDialog, private msg: ProductService, private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document,
              private router: Router, private ngZone: NgZone,) {
    this.renderer = rendererFactory.createRenderer(null, null)
    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loader = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden', importantFlag);
    }
    if (event instanceof NavigationEnd || NavigationCancel) {
      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout);
        this.loader = false;
        this.renderer.removeStyle(document.body, 'overflow');
      }, 1000);

    }
  }

  dropTextAnimation() {
    this.tl.fromTo(this.marineF.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.3,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.fresh.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.iFish.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.acce.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.spec.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.aboutF.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
    this.tl.fromTo(this.cont.nativeElement,
      {
        x: 50,
        opacity: 0,
      }, {
        opacity: 1,
        duration: 0.2,
        y: 10,
        autoAlpha: -3,
        ease: 'power2.easeOut',
        stagger: {
          from: 'start',
          amount: 0.5,
        },
      })
  }


  ngOnInit(): void {
    function changeCar() {
      let target = document.getElementsByTagName("input")
      for (let i = 0; i <= target.length; i++) {
        if (target[i].checked == true) {
          if (target[2].checked == true) {
            target[0].checked = true
          } else {
            target[i + 1].checked = true
          }
          break
        }
      }
    }

    setInterval(function () {
      changeCar()
    }, 7000)

    this.headerText();
    this.dropTextAnimation();

    this.msg.getProducts()
      .subscribe(res => {
        this.totalItems = res.length
      })
  }


  hambRotate() {
    this.hambOne1 = this.hambOne1 === 'hambOne2' ? 'hambOne3' : 'hambOne2';
    this.hambSec1 = this.hambSec1 === 'hambSec2' ? 'hambSec3' : 'hambSec2';
    this.hambThi1 = this.hambThi1 === 'hambThi2' ? 'hambThi3' : 'hambThi2';
    this.nav1 = this.nav1 === 'nav2' ? 'nav3' : 'nav2';
    this.logo1 = this.logo1 === 'logo2' ? 'logo3' : 'logo2';
    this.drop1 = this.drop1 === 'drop2' ? 'drop3' : 'drop2';
    this.marine1 = this.marine1 === 'marine2' ? 'marine3' : 'marine2';
    this.section1 = this.section1 === 'section2' ? 'section3' : 'section2';
    this.tl.reversed() ? this.tl.play() : this.tl.reverse()
    this.disable();
  }

  public disable() {
    if (this.marine1 === 'marine3') {
      this.renderer.setStyle(document.body, 'overflow', 'hidden', importantFlag);
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  headerText() {
    gsap.from(this.laqua.nativeElement, {
      delay: 1.5,
      duration: 1.3,
      opacity: 0,
      scale: 0,
      y: 10,
      ease: "back",
      stagger: 0.01
    })
    gsap.from(this.aqua.nativeElement, {
      delay: 1.5,
      duration: 0.9,
      opacity: 0,
      scale: 0,
      y: 80,
      ease: "back",
      stagger: 0.01
    })

    gsap.from(this.terra.nativeElement, {
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scale: 0, y: 80,
      ease: "back",
      stagger: 0.01
    })
    gsap.from(this.fitting.nativeElement, {
      delay: 1.5,
      duration: 1.1,
      opacity: 0,
      scale: 0, y: 80,
      ease: "back",
      stagger: 0.01
    })
  }

  openDialog() {
    this.dialog.open(ProductListComponent, {
      height: '40rem',
      width: '60rem',
    })
  }


}
