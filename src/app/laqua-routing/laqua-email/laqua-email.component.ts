import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {gsap} from "gsap";


@Component({
  selector: 'app-laqua-email',
  templateUrl: './laqua-email.component.html',
  styleUrls: ['./laqua-email.component.scss']
})
export class LaquaEmailComponent implements OnInit {
  cities: string [] = ['Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Gori', 'Zugdidi', 'Poti', 'Kobuleti', 'Khashuri', 'Samtredia', 'Senaki', 'Zestafoni',
    'Marneuli', 'Telavi', 'Akhaltsikhe', 'Ozurgeti', 'Kaspi', 'Chiatura', 'Tsqaltubo', 'Sagarejo', 'Gardabani', 'Borjomi', 'Tkibuli', 'Khoni', 'Bolnisi',
    'Akhalkalaki', 'Gurjaani', 'Mtskheta', 'Kvareli', 'Akhmeta', 'Kareli', 'Lanchkhuti', 'Tsalenjikha', 'Dusheti', 'Sachkhere', 'Dedoplistsqaro', 'Lagodekhi',
    'Ninotsminda', 'Abasha', 'Tsnori', 'Terjola', 'Martvili', 'Jvari', 'Khobi', 'Vani', 'Baghdati', 'Vale', 'Tetritsqaro', 'Tsalka', 'Dmanisi', 'Oni',
    'Ambrolauri', 'Sighnaghi', 'Tsageri']
  lForm: FormGroup;
  address: FormGroup;
  @ViewChild('order', {static: true}) order!: ElementRef<HTMLDivElement>

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.lForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('[a-z A-Z]+')]],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(12), Validators.pattern('[a-z A-Z]+')]],
      city: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^(544|514|551|555|557|558|559|568|570|571|574|577|578|579|591|592|593|595|596|597|598|599)-[0-9]{2}-[0-9]{2}-[0-9]{2}')]],
      address: ['', [Validators.required, Validators.pattern('[a-zA-z]+-[0-9]{2}'), Validators.minLength(5), Validators.maxLength(30)]]
    })
    this.orderHeaderAnimation();
  }

  orderHeaderAnimation() {
    gsap.from(this.order.nativeElement, {
      scrollTrigger: {
        trigger: this.order.nativeElement,
        start: 'bottom 80%',
        end: '100px top',
      },
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2",
    })
  }
}
