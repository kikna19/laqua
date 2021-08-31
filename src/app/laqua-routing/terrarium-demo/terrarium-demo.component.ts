import { Component, OnInit } from '@angular/core';
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";

@Component({
  selector: 'app-terrarium-demo',
  templateUrl: './terrarium-demo.component.html',
  styleUrls: ['./terrarium-demo.component.scss']
})
export class TerrariumDemoComponent implements OnInit {
  close = faTimesCircle;
  constructor() { }

  ngOnInit(): void {
  }

}
