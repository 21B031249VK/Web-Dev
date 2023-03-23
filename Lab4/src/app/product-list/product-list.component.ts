import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [...products];

  openProduct(link: string){
    window.open(link);
  }

  shareTg(link: string) {
    var sharelink = "https://t.me/share/url?url="+link;
    window.open(sharelink);
  }
  shareWp(link: string) {
    var sharelink = "whatsapp://send?text= "+link;
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/