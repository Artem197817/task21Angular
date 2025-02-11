import {Injectable} from '@angular/core';
import {ProductType} from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        image: 'macaroon1.png',
        productTitle: 'Макарун с малиной',
        quantity: '1 шт',
        price: 1.70,
      },
      {
        image: 'macaroon2.png',
        productTitle: 'Макарун с манго',
        quantity: '1 шт',
        price: 1.70,
      },
      {
        image: 'macaroon3.png',
        productTitle: 'Пирог с ванилью',
        quantity: '1 шт',
        price: 1.70,
      },
      {
        image: 'macaroon4.png',
        productTitle: 'Пирог с фисташками',
        quantity: '1 шт',
        price: 1.70,
      }
    ];

  }
}
