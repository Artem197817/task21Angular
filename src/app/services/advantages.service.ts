import { Injectable } from '@angular/core';
import {AdvantageType} from '../types/advantage.type';

@Injectable({
  providedIn: 'root'
})
export class AdvantagesService {

  constructor() { }

  getAdvantages():AdvantageType[] {
    return [
      {
        advantageTitle: 'Лучшие продукты',
        advantageDescription: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
      },
      {
        advantageTitle: 'Много вкусов',
        advantageDescription: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
      },
      {
        advantageTitle: 'Бисквитное тесто',
        advantageDescription: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
      },
      {
        advantageTitle: 'Честный продукт',
        advantageDescription: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
      },
    ];
  }
}
