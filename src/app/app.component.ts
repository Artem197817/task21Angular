import {Component} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductType} from './types/product.type';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdvantageType} from './types/advantage.type';
import {ProductComponent} from './components/product/product.component';


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    ProductComponent

  ],
  styleUrl: './app.component.less'
})
export class AppComponent {
  public title = 'task20macaroon';
  public isDark: boolean = false;
  public orderForm: FormGroup;
  public successMessage: string | null = null;
  public showPresent: boolean = false;
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com';
  public showOrderForm: boolean = true;
  public loading: boolean = false;
  public products: ProductType[] = [
    {
      image: 'macaroon1.png',
      productTitle: 'Макарун с малиной',
      quantity: '1 шт',
      price: '1.70 руб.',
    },
    {
      image: 'macaroon2.png',
      productTitle: 'Макарун с манго',
      quantity: '1 шт',
      price: '1.70 руб.',
    },
    {
      image: 'macaroon3.png',
      productTitle: 'Пирог с ванилью',
      quantity: '1 шт',
      price: '1.70 руб.',
    },
    {
      image: 'macaroon4.png',
      productTitle: 'Пирог с фисташками',
      quantity: '1 шт',
      price: '1.70 руб.',
    }
  ];
  public advantages: AdvantageType[] = [
    {
      advantageTitle: 'Лучшие продукты',
      advantageDescription: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      advantageTitle: 'Много вкусов',
      advantageDescription: 'аша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
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

  public FormModel = {
    productTitle: '',
    name: '',
    phone: ''
  }


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.orderForm = this.fb.group({
      product: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  public darkThemeActivation() {
    const bodyElement: HTMLElement | null = document.getElementById('app-body');
    if (bodyElement) {
      if (this.isDark) {
        bodyElement.classList.remove('dark-theme');
        this.isDark = false;
      } else {
        bodyElement.classList.add('dark-theme')
        this.isDark = true;
      }
    }
  }

  public scrollInTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollInTo(target);
    this.orderForm.patchValue({
      product: product.productTitle.toUpperCase()
    });
    this.showPresent = true;
  }

  public burgerBehavior(target: HTMLElement): void {
    if (target)
      target.classList.add('open')
  }

  public closeMenu(target: HTMLElement): void {
    target.classList.remove('open');
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this.loading = true;
      const formData = this.orderForm.value;

      this.http.post('https://testologia.ru/checkout', formData).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success === 1) {
            this.successInfo('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!');
          } else {
            this.successInfo('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
          }
          this.loading = false;
          this.orderForm.reset();
        },
        (error) => {
          console.error('Произошла ошибка:', error);
          this.successInfo('Произошла ошибка при отправке данных.');
          this.loading = false;
        }
      );
    }

  }

  public successInfo(message: string): void {
    this.showOrderForm = false;
    this.successMessage = message;
    this.orderForm.reset();
  }


}
