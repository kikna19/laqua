export class MarineFish {
 id: number;
 name: string;
 qty: number;
 price:number;
 currency: string;
 imgUrl: string;
 constructor(id, name, price, currency, imgUrl, qty) {
   this.id = id;
   this.name = name;
   this.qty = qty;
   this.price = price;
   this.currency = currency;
   this.imgUrl = imgUrl;
 }
}
