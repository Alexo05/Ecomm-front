import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  @Input() cartItems: any[] = [];
  public products: any = [];
  public grandTotal!: number;
  paymentInProgress: boolean = false;
  paymentSuccess: boolean = false;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  incrementQuantity(item: any) {
    // Increase the quantity of the item in the cart
    item.quantity++;
    item.total = item.quantity * item.price;
    this.cartService.updateCartItem(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  decrementQuantity(item: any) {
    // Decrease the quantity of the item in the cart, but not below 1
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.quantity * item.price;
      this.cartService.updateCartItem(item);
      this.grandTotal = this.cartService.getTotalPrice();
    }
  }

  checkout() {
    this.router.navigate(['/payment']);
  }

  // Add the following method to handle payment success
  handlePaymentSuccess() {
    console.log('Payment success method called');
    this.paymentInProgress = false;
    this.paymentSuccess = true;
  }
}
