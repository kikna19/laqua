import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons/faTimesCircle";


@Component({
  selector: 'app-aquarium-demo',
  templateUrl: './aquarium-demo.component.html',
  styleUrls: ['./aquarium-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AquariumDemoComponent implements OnInit {
close = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
}

}

