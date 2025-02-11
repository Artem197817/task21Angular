import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyPipe',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(currency: number): string {
    return currency.toFixed(2) + ' руб.';
  }

}
