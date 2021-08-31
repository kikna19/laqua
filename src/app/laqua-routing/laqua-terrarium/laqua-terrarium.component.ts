import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TerrariumDemoComponent} from "../terrarium-demo/terrarium-demo.component";

@Component({
  selector: 'app-laqua-terrarium',
  templateUrl: './laqua-terrarium.component.html',
  styleUrls: ['./laqua-terrarium.component.scss']
})
export class LaquaTerrariumComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(TerrariumDemoComponent)
}
}
