import { Component, OnInit } from '@angular/core';
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";

@Component({
  selector: 'app-feeding-demo',
  templateUrl: './feeding-demo.component.html',
  styleUrls: ['./feeding-demo.component.scss']
})
export class FeedingDemoComponent implements OnInit {
  close = faTimesCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
