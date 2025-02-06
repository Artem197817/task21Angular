import {Component, Input} from '@angular/core';
import {ProductType} from '../../types/product.type';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.less'
})
export class ProductComponent {
  i:number = 0;

@Input product: ProductType;

constructor() {
  this.i++;
}



}
