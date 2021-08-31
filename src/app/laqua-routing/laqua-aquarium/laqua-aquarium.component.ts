import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AquariumDemoComponent} from "../aquarium-demo/aquarium-demo.component";


@Component({
  selector: 'app-laqua-aquarium',
  templateUrl: './laqua-aquarium.component.html',
  styleUrls: ['./laqua-aquarium.component.scss']
})
export class LaquaAquariumComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }
  ngOnInit(): void {}


}
