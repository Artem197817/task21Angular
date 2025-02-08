import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {CurrencyPipe} from '../../pipes/currency.pipe';


@Component({
  selector: 'product',
  imports: [
    CurrencyPipe,
  ],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.less'
})
export class ProductComponent {
  i:number = 0;

@Input() product!: ProductType;

@Output() addToCartEvent = new EventEmitter<ProductType>();

constructor() {

}

addToCartProduct(){
  this.addToCartEvent.emit(this.product);
}


}
