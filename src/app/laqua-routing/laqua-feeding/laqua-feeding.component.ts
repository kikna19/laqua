import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FeedingDemoComponent} from "../feeding-demo/feeding-demo.component";

@Component({
  selector: 'app-laqua-feeding',
  templateUrl: './laqua-feeding.component.html',
  styleUrls: ['./laqua-feeding.component.scss']
})
export class LaquaFeedingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
openFeedingDemo(){
    this.dialog.open(FeedingDemoComponent)
}
}
