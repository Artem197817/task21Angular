import {Component, Injectable} from '@angular/core';
import {CurrencyPipe} from '../../pipes/currency.pipe';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'cart',
  standalone: true,

  templateUrl: './cart.component.html',
  imports: [
    CurrencyPipe
  ],
  styleUrl: './cart.component.less'
})


export class CartComponent {

constructor(public cartService: CartService) {
}

}
