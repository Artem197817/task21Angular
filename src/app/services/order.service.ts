import {Injectable, signal, WritableSignal} from '@angular/core';
import {Subject} from 'rxjs';
import {ProductType} from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public showOrderForm: WritableSignal<boolean> = signal(true);
  public successMessage: WritableSignal<string> = signal('');
  private selectedProductSource = new Subject<ProductType>();
  selectedProduct$ = this.selectedProductSource.asObservable();
  selectProduct(product: ProductType) {
    this.selectedProductSource.next(product);
  }

  public orderBehavior(showOrderForm: boolean, successMessage:string = ''): void {

      this.showOrderForm.set(showOrderForm);
      this.successMessage.set(successMessage);

  }
}
