import {Injectable, signal} from '@angular/core';
import {CartComponent} from '../components/cart/cart.component';
import {ProductType} from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  summaView = signal(0);
  count = signal(0);
  constructor() {

  }

  cartAddProduct(product: ProductType) {
    this.count.update(value => value + 1);
    this.summaView.update(value => value + product.price);
  }
}
