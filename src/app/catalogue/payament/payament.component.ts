import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-payament',
  templateUrl: './payament.component.html',
  styleUrls: ['./payament.component.css']
})
export class PayamentComponent {

  paymentForm: FormGroup;
  totalPrice: Number = 0;
  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService, private http: HttpClient, private tokenStorage: TokenService) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      cardName: ['', Validators.required],
      expiry: ['', Validators.required],
      cvv: ['', Validators.required],
    });
    this.totalPrice = this.cartService.getTotalPrice();
  }

  submitPayment() {
    if (this.paymentForm.valid) {
      console.log('Payment info:', this.paymentForm.value);
      this.http.post('http://localhost:9091/order/create', {clientName: this.tokenStorage.getEmail(), totalAmount: this.totalPrice })
      .subscribe(() => {
        
        alert('Payment successful & order placed!');
        this.cartService.removeAllCart();

        this.router.navigate(['/']); 
      })
    } else {
      alert('Please fill all fields correctly.');
    }
  }

}
