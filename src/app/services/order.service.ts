import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {ProductType} from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private selectedProductSource = new Subject<ProductType>();
  selectedProduct$ = this.selectedProductSource.asObservable();
  selectProduct(product: ProductType) {
    this.selectedProductSource.next(product);
  }
}
