import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberFormat',
  standalone: true
})
export class PhoneNumberFormatPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (!phoneNumber) {
      return '';
    }

    const cleaned = ('' + phoneNumber).replace(/\D/g, '');

    if (cleaned.length !== 12) {
      return 'Invalid phone number';
    }

    const countryCode = cleaned.substring(0, 3);
    const operatorCode = cleaned.substring(3, 5);
    const part1 = cleaned.substring(5, 8);
    const part2 = cleaned.substring(8, 10);
    const part3 = cleaned.substring(10, 12);

    return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
  }

}
