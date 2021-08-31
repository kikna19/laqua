import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MarineFish} from "../marine/marine-fish";
import {ProductService} from "../../product.service";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";
import {MatDialog} from "@angular/material/dialog";
import {CartAlertComponent} from "../cart-alert/cart-alert.component";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons/faWindowClose";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent implements OnInit {
  close = faWindowClose
  grandTotal: number;
  plus = faPlus;
  minus = faMinus;
  trash = faTrash;
  productList: any = [];

  constructor(private msg: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.msg.getProducts().subscribe(res => {
      this.productList = res;
     this.grandTotal = this.msg.getTotal();
    })

  }


  plusItem(item: MarineFish) {
    if (item.qty != 50) {
      this.grandTotal += (item.price * item.qty / item.qty)
      item.qty += 1;
    } else {
      this.dialog.open(CartAlertComponent, {
        width: '22rem',
        height: '10rem',
      })
    }
  }

  minusItem(item: MarineFish) {
    if (item.qty != 1) {
      this.grandTotal -= (item.price * item.qty / item.qty)
      item.qty -= 1;
    }
  }

  removeItem(item: MarineFish) {
    this.msg.removeProduct(item)
  }

  removeAllItems() {
    this.msg.removeAll();
  }

}

