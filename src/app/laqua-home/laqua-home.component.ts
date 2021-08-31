import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {faFistRaised} from "@fortawesome/free-solid-svg-icons";
import {animate, animation, state, style, transition, trigger} from "@angular/animations";

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-laqua-home',
  templateUrl: './laqua-home.component.html',
  styleUrls: ['./laqua-home.component.scss'],
  animations: [
    trigger('fStepHeader', [
      state('fStepHeader2', style({})),
      state('fStepHeader3', style({border: '.1rem solid #b8912f', color: 'black'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('sStepHeader', [
      state('sStepHeader2', style({})),
      state('sStepHeader3', style({border: '.1rem solid #b8912f', color: 'black'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('tStepHeader', [
      state('tStepHeader2', style({})),
      state('tStepHeader3', style({border: '.1rem solid #b8912f', color: 'black'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('foStepHeader', [
      state('foStepHeader2', style({})),
      state('foStepHeader3', style({border: '.1rem solid #b8912f', color: 'black'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('fiStepHeader', [
      state('fiStepHeader2', style({})),
      state('fiStepHeader3', style({border: '.1rem solid #b8912f', color: 'black'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('foStepNmb', [
      state('foStepNmb2', style({})),
      state('foStepNmb3', style({color: '#b8912f', cursor: 'pointer'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('fiStepNmb', [
      state('fiStepNmb2', style({})),
      state('fiStepNmb3', style({color: '#b8912f', cursor: 'pointer'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('tStepNmb', [
      state('tStepNmb2', style({})),
      state('tStepNmb3', style({color: '#b8912f', cursor: 'pointer'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('sStepNmb', [
      state('sStepNmb2', style({})),
      state('sStepNmb3', style({color: '#b8912f', cursor: 'pointer'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
    trigger('fStepNmb', [
      state('fStepNmb2', style({})),
      state('fStepNmb3', style({color: '#b8912f', cursor: 'pointer'})),
      transition('* <=> *', animate('1s ease-in-out'))
    ]),
  ]
})
export class LaquaHomeComponent implements OnInit {
  fStepHeader1 = 'fStepHeader2';
  sStepHeader1 = 'sStepHeader2';
  tStepHeader1 = 'tStepHeader2';
  foStepHeader1 = 'foStepHeader2';
  fiStepHeader1 = 'fiStepHeader2';
  foStepNmb1 = 'foStepNmb2';
  fiStepNmb1 = 'fiStepNmb2';
  tStepNmb1 = 'tStepNmb2';
  sStepNmb1 = 'sStepNmb2';
  fStepNmb1 = 'fStepNmb2'

  @ViewChild('offerHeader', {static: true}) offerHeader!: ElementRef<HTMLDivElement>
  @ViewChild('firstImg', {static: true}) firstImg!: ElementRef<HTMLDivElement>
  @ViewChild('secondFirstImg', {static: true}) secondFirstImg!: ElementRef<HTMLDivElement>
  @ViewChild('secondSecondImg', {static: true}) secondSecondImg!: ElementRef<HTMLDivElement>
  @ViewChild('secondThirdImg', {static: true}) secondThirdImg!: ElementRef<HTMLDivElement>
  @ViewChild('firstText', {static: true}) firstText!: ElementRef<HTMLDivElement>
  @ViewChild('secondFirstText', {static: true}) secondFirstText!: ElementRef<HTMLDivElement>
  @ViewChild('secondSecondText', {static: true}) secondSecondText!: ElementRef<HTMLDivElement>
  @ViewChild('secondThirdText', {static: true}) secondThirdText!: ElementRef<HTMLDivElement>
  @ViewChild('foStepNmb', {static: true}) foStepNmb!: ElementRef<HTMLDivElement>


  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.offerAnimation();
    this.stepNmbAnimation();
    this.aquaRotate();

  }

  fStepHeaderE(e: any) {
    this.fStepHeader1 = 'fStepHeader3';
    this.fStepNmb1 = 'fStepNmb3';

  }

  fStepHeaderL(e: any) {
    this.fStepHeader1 = 'fStepHeader2';
    this.fStepNmb1 = 'fStepNmb2';
  }

  sStepHeaderE(e: any) {
    this.sStepHeader1 = 'sStepHeader3'
    this.sStepNmb1 = 'sStepNmb3';
  }

  sStepHeaderL(e: any) {
    this.sStepHeader1 = 'sStepHeader2';
    this.sStepNmb1 = 'sStepNmb2';
  }

  tStepHeaderE(e: any) {
    this.tStepHeader1 = 'tStepHeader3';
    this.tStepNmb1 = 'tStepNmb3';
  }

  tStepHeaderL(e: any) {
    this.tStepHeader1 = 'tStepHeader2';
    this.tStepNmb1 = 'tStepNmb2';
  }

  foStepHeaderE(e: any) {
    this.foStepHeader1 = 'foStepHeader3';
    this.fiStepNmb1 = 'fiStepNmb3';
  }

  foStepHeaderL(e: any) {
    this.foStepHeader1 = 'foStepHeader2';
    this.fiStepNmb1 = 'fiStepNmb2';
  }

  fiStepHeaderE(e: any) {
    this.fiStepHeader1 = 'fiStepHeader3'
    this.foStepNmb1 = 'foStepNmb3';
  }

  fiStepHeaderL(e: any) {
    this.fiStepHeader1 = 'fiStepHeader2';
    this.foStepNmb1 = 'foStepNmb2';

  }


  stepNmbAnimation() {
    let startCount = 0;
    let endCount = 525;
    let num = {let: startCount};
    let fStepNmb = document.getElementById('fStepNmb') as HTMLDivElement
    gsap.set(fStepNmb, {opacity: 0});
    gsap.timeline({
      scrollTrigger: {
        trigger: fStepNmb,
        start: 'bottom 85%',
      }
    }).to(num, {duration: 2, ease: 'slow', let: endCount, onUpdate: changeNumber});
    gsap.timeline({
      scrollTrigger: {
        trigger: fStepNmb,
        start: 'bottom 85%',
      }
    }).to(fStepNmb, {opacity: 1});

    function changeNumber() {
      fStepNmb.innerText = (num.let).toLocaleString("en", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }

    let startCountS = 0;
    let endCountS = 359;
    let numS = {let: startCountS};
    let sStepNmb = document.getElementById('sStepNmb') as HTMLDivElement;
    gsap.set(sStepNmb, {opacity: 0});
    gsap.timeline({
      scrollTrigger: {
        trigger: sStepNmb,
        start: 'bottom 84%',
      }
    }).to(numS, {duration: 1, ease: 'slow', let: endCountS, onUpdate: changeNumberS});
    gsap.timeline({
      scrollTrigger: {
        trigger: sStepNmb,
        start: 'bottom 84%',
      }
    }).to(sStepNmb, {opacity: 1})

    function changeNumberS() {
      sStepNmb.innerText = (numS.let).toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    }


    let startCountT = 0;
    let endCountT = 243;
    let numT = {let: startCountT};
    let tStepNmb = document.getElementById('tStepNmb') as HTMLDivElement
    gsap.set(tStepNmb, {opacity: 0});
    gsap.timeline({
      scrollTrigger: {
        trigger: tStepNmb,
        start: 'bottom 83%',
      }
    }).to(numT, {duration: 1, ease: 'slow', let: endCountT, onUpdate: changeNumberT});
    gsap.timeline({
      scrollTrigger: {
        trigger: tStepNmb,
        start: 'bottom 83%',
      }
    }).to(tStepNmb, {opacity: 1});

    function changeNumberT() {
      tStepNmb.innerText = (numT.let).toLocaleString("en", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }


  }

  offerAnimation() {
    gsap.from(this.offerHeader.nativeElement, {
      scrollTrigger: {
        trigger: this.offerHeader.nativeElement,
        start: 'bottom 80%',
        end: '100px top',
      },
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2",
    })
    gsap.from(this.firstImg.nativeElement, {
      scrollTrigger: {
        trigger: this.firstImg.nativeElement,
        start: 'bottom 130%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power2",
    })
    gsap.from(this.secondFirstImg.nativeElement, {
      scrollTrigger: {
        trigger: this.secondFirstImg.nativeElement,
        start: 'bottom 80%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3",
    })
    gsap.from(this.secondSecondImg.nativeElement, {
      scrollTrigger: {
        trigger: this.secondSecondImg.nativeElement,
        start: 'bottom 75%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3",
    })
    gsap.from(this.secondThirdImg.nativeElement, {
      scrollTrigger: {
        trigger: this.secondThirdImg.nativeElement,
        start: 'bottom 95%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: 30,
      ease: "power3",
    })
    gsap.from(this.firstText.nativeElement, {
      scrollTrigger: {
        trigger: this.firstText.nativeElement,
        start: 'bottom 100%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: -5,
      ease: "power1",
    })
    gsap.from(this.secondFirstText.nativeElement, {
      scrollTrigger: {
        trigger: this.secondFirstText.nativeElement,
        start: 'bottom 100%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: -5,
      ease: "power1",
    }),
      gsap.from(this.secondSecondText.nativeElement, {
        scrollTrigger: {
          trigger: this.secondSecondText.nativeElement,
          start: 'bottom 100%',
          end: '100px top'
        },
        duration: 1,
        opacity: 0,
        y: -5,
        ease: "power1",
      })
    gsap.from(this.secondThirdText.nativeElement, {
      scrollTrigger: {
        trigger: this.secondThirdText.nativeElement,
        start: 'bottom 120%',
        end: '100px top'
      },
      duration: 1,
      opacity: 0,
      y: -5,
      ease: "power1",
    })
  }

  aquaRotate() {
    let aqua = document.getElementById('aqua') as HTMLDivElement
    let controls = document.getElementById('control') as HTMLDivElement
    let currentValue = '';

    function aquaRotate() {
      let input = controls.querySelector(':checked') as HTMLInputElement;
      let showSide = 'show-' + input.value;
      if (currentValue) {
        aqua.classList.remove(currentValue)
      }
      aqua.classList.add(showSide)
      currentValue = showSide
    }
    aquaRotate()
    controls.addEventListener('change', aquaRotate)
  }


  fishH!: number
  fishW!: number
  fishWei!: number
  fHeight!: number;
  fWidth!: number;
  bHeight!: number;
  bWidth!: number;
  lHeight!: number;
  lWidth!: number;
  rHeight!: number;
  rWidth!: number;
  tHeight!: number;
  tWidth!: number;

  litrageCalculate() {
    this.fHeight = (this.fishH * 6);
    this.bHeight = (this.fishH * 6);
    this.fWidth = (this.fishW * 8);
    this.bWidth = (this.fishW * 8);
    this.tWidth = (this.fishW * 8);
    this.rHeight = (this.fishH * 6);
    this.lHeight = (this.fishH * 6);
    this.tHeight = (this.fishH * 6);
    this.tHeight = (this.fishWei / 2);
    this.lWidth = (this.fishWei / 2);
    this.rWidth = (this.fishWei / 2);

  }


}
