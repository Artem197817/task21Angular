import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {OrderService} from '../../services/order.service';
import {ProductType} from '../../types/product.type';
import {ButtonEffectDirective} from '../../directives/button-effect.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,

  templateUrl: './form.component.html',
  imports: [
    ReactiveFormsModule,
    ButtonEffectDirective,
    NgIf
  ],
  styleUrl: './form.component.less'
})
export class FormComponent implements OnInit {
  orderForm: FormGroup;
  selectedProduct!: ProductType;

  constructor(private fb: FormBuilder,
              private orderService: OrderService) {
    this.orderForm = this.fb.group({
      product: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  ngOnInit(): void {
    this.orderService.selectedProduct$.subscribe(product => {
      this.selectedProduct = product;
      this.orderForm.patchValue({product: product.productTitle.toUpperCase()});
    });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {

      console.log('Order form data:', this.orderForm.value);

      this.orderForm.reset();
    }
  }
}
