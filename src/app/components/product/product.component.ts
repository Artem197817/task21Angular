import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {CurrencyPipe} from '../../pipes/currency.pipe';
import {CartService} from '../../services/cart.service';
import {ButtonEffectDirective} from '../../directives/button-effect.directive';
import {OrderService} from '../../services/order.service';


@Component({
  selector: 'product',
  imports: [
    CurrencyPipe,
    ButtonEffectDirective,
  ],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.less'
})
export class ProductComponent {
  i: number = 0;

  @Input() product!: ProductType;

  @Output() addToCartEvent = new EventEmitter<ProductType>();

  constructor(private cartService: CartService,
              private orderService: OrderService) {
  }

  addToCartProduct() {
    this.addToCartEvent.emit(this.product);
    this.cartService.cartAddProduct(this.product);
    this.orderService.selectProduct(this.product);
  }


}
