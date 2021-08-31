import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MarineFish} from "./laqua-routing/marine/marine-fish";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public cartItems: any = [];
  public productList = new BehaviorSubject<any>([]);
  total!: number;

  constructor() {
  }

  getProducts() {
    return this.productList.asObservable();
  }

  addToCart(product: any) {
    const exist = this.cartItems.find((item) => {
      return item.id === product.id
    })
    if (exist)
      exist.qty++;
    else this.cartItems.push(product);

    this.getTotal();
    this.productList.next(this.cartItems);
  }

  getTotal(): number {
    this.total = this.cartItems.reduce(function (acc, item) {
      return acc + (item.price * item.qty)
    }, 0)
    return  this.total
  }

  removeProduct(product: MarineFish) {
    this.cartItems.map((a: MarineFish, index: MarineFish) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1)
        product.qty = 1;
      }
    })
    this.productList.next(this.cartItems);
  }

  removeAll() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }

}
