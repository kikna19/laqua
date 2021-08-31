import {Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MarineFish} from "./marine-fish";
import {ProductService} from "../../product.service";
import {CartAlertComponent} from "../cart-alert/cart-alert.component";
import {MatDialog} from "@angular/material/dialog";
import {gsap} from "gsap";


@Component({
  selector: 'app-marine',
  templateUrl: './marine.component.html',
  styleUrls: ['./marine.component.scss'],
})

export class MarineComponent implements OnInit {
  @ViewChild('cardHeader', {static: true}) cardHeader!: ElementRef
  marineFish: MarineFish [] = [
    {id: 1, name: 'Black Damsel', qty: 1, price: 20, currency: '₾', imgUrl: 'https://www.seagarden.pl/images/Nazamwienie/Dascyllus%20trimaculatus%20SeaGarden%20Akwarystyka%20morska%20sklep%20Dolny%20Śląsk.jpg'},
    {id: 2, name: 'Sea Goldie', qty: 1, price: 15, currency: '₾', imgUrl: 'https://www.daily-sun.com/assets/news_images/2015/12/25/Sea-Goldie---1.jpg'},
    {id: 3, name: 'Dip Damsel', qty: 1, price: 80, currency: '₾', imgUrl: 'https://images.reeflifesurvey.com/1/species_c6_5ae7b9044cf14.w1300.h866.jpg'},
    {id: 4, name: 'Anemonefish', qty: 1, price: 60, currency: '₾', imgUrl: 'https://www.starfish.ch/photos/fishes-Fische/damselfishes-Riffbarsche/Amphiprion-ocellaris11.jpg'},
    {id: 5, name: 'Bicolor Angel', qty: 1, price: 120, currency: '₾', imgUrl: 'https://bestfish.com/wp-content/uploads/2017/05/DSC_0337.jpg'},
    {id: 6, name: 'Peacock Grouper', qty: 1, price: 200, currency: '₾', imgUrl: 'https://fishesofaustralia.net.au/Images/Image/CephalopholisArgus2MarkRosenstein.jpg'},
    {id: 7, name: 'Common Lionfish', qty: 1, price: 300, currency: '₾', imgUrl: 'https://www.thesprucepets.com/thmb/Cqhnp8nZZlDOLesgF0EUQ9G8jDM=/2121x1193/smart/filters:no_upscale()/GettyImages-1209874964-462370fea7814eb3b216ac2a47327409.jpg'},
    {id: 8, name: 'Longfin Batfish', qty: 1, price: 70, currency: '₾', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Platax%2C_Mauritius.jpg'},
    {id: 9, name: 'Trumpetfish', qty: 1, price: 500, currency: '₾', imgUrl: 'https://www.waikikiaquarium.org/wp-content/uploads/2013/11/trumpetfish_620.jpg'},
    {id: 10, name: 'Bridlet Parrotfish', qty: 1, price: 120, currency: '₾', imgUrl: 'https://images.reeflifesurvey.com/0/species_97_573c169ab7fc6.w1300.h866.jpg'},
  ]
  data: any = [];


  constructor(private msg: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }



  handleProduct(fish: any) {
    if (fish.qty != 50) {
      this.msg.addToCart(fish);
    } else if (fish.qty === 50) {
      this.dialog.open(CartAlertComponent, {
        width: '22rem',
        height: '10rem',
      })
    }
  }



}
