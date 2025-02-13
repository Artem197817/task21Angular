import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {ProductType} from './types/product.type';
import {AdvantageType} from './types/advantage.type';
import {ProductComponent} from './components/product/product.component';
import {ProductService} from './services/product.service';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {AdvantagesService} from './services/advantages.service';
import {PhoneNumberFormatPipe} from './pipes/phone-number-format.pipe';
import {CartComponent} from './components/cart/cart.component';
import {ButtonEffectDirective} from './directives/button-effect.directive';
import {FormComponent} from './components/form/form.component';
import {RouterLink} from '@angular/router';
import {OrderService} from './services/order.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NgForOf,
    NgIf,
    ProductComponent,
    AdvantagesComponent,
    PhoneNumberFormatPipe,
    CartComponent,
    ButtonEffectDirective,
    FormComponent,
    CommonModule,
    RouterLink,
  ],
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  public title = 'task21Angular';
  private isDark: boolean = false;

  protected showPresent:boolean = false;
  protected phoneNumber: string = '+375293689868';
  protected instagramLink: string = 'https://www.instagram.com';
  protected loading: boolean = false;
  protected products: ProductType[] = [];
  protected advantages: AdvantageType[] = [];
  protected messagePopup: string = '';
  protected isPopupOpen: boolean = false;


  constructor(private productService: ProductService,
              private advantageService: AdvantagesService,
              public orderService: OrderService,) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.advantages = this.advantageService.getAdvantages();
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

    this.showPresent = true;
    this.isPopupOpen = true;
    this.messagePopup = product.productTitle + ' добавлен в корзину'
  }

  popupClose() {
    this.isPopupOpen = false;
  }

  public burgerBehavior(target: HTMLElement): void {
    if (target)
      target.classList.add('open')
  }

  public closeMenu(target: HTMLElement): void {
    target.classList.remove('open');
  }
  successBlockClose(){
    this.orderService.orderBehavior(true);
  }

  /** Пока к теме не относится **/

  // onSubmit() {
  //   if (this.orderForm.valid) {
  //     this.loading = true;
  //     const formData = this.orderForm.value;
  //
  //     this.http.post('https://testologia.ru/checkout', formData).subscribe(
  //       (response: any) => {
  //         console.log(response);
  //         if (response.success === 1) {
  //           this.successInfo('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!');
  //         } else {
  //           this.successInfo('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
  //         }
  //         this.loading = false;
  //         this.orderForm.reset();
  //       },
  //       (error) => {
  //         console.error('Произошла ошибка:', error);
  //         this.successInfo('Произошла ошибка при отправке данных.');
  //         this.loading = false;
  //       }
  //     );
  //   }
  //
  // }
  //
  // public successInfo(message: string): void {
  //   this.showOrderForm = false;
  //   this.successMessage = message;
  //   this.orderForm.reset();
  // }


}
