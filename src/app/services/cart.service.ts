import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public email:string = '';
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    const existingProductIndex = this.cartItemList.findIndex(
      (item: any) => item.productId === product.productId
    );

    if (existingProductIndex !== -1) {
      this.cartItemList[existingProductIndex].quantity += 1;
      this.cartItemList[existingProductIndex].total =
        this.cartItemList[existingProductIndex].quantity *
        this.cartItemList[existingProductIndex].price;
    } else {
      const newProduct = { ...product, quantity: 1, total: product.price };
      this.cartItemList.push(newProduct);
    }

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  updateCartItem(item: any) {
    const existingItemIndex = this.cartItemList.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      this.cartItemList[existingItemIndex] = item;
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((item: any) => {
      grandTotal += item.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList = this.cartItemList.filter(
      (item: any) => item.id !== product.id
    );
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  setEmail(email:string){
    this.email = email;
  }

  getEmail(): string{
    return this.email;
  }
}
