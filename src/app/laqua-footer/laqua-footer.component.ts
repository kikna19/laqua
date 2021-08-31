import { Component, OnInit } from '@angular/core';
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";

@Component({
  selector: 'app-laqua-footer',
  templateUrl: './laqua-footer.component.html',
  styleUrls: ['./laqua-footer.component.scss']
})
export class LaquaFooterComponent implements OnInit {
facebook = faFacebook;
instagram = faInstagram;
linkedin = faLinkedinIn;
youtube = faYoutube;
twitter = faTwitter;

  constructor() { }

  ngOnInit(): void {


  }

}
