import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import {range} from "rxjs";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})

export class ProductItemComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {}


  delete(product: any) {
    product.isActive = false;
  }

  like(product: any){
    product.likes += 1;
  }

  shareTg(url: string) {
    let sharelink = "https://t.me/share/url?url=" + url;
    window.open(sharelink);
  }

  shareWp(url: string) {
    let sharelink = "whatsapp://send?text=" + url;
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

