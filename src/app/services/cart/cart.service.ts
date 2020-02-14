import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart() : Product[]{
    return sessionStorage.getItem('cart') == null ? [] : JSON.parse(sessionStorage.getItem('cart'));
  }

  setCart(cart : Product[]){
    sessionStorage.setItem('cart',JSON.stringify(cart));
  }

  emptyCart(){
    this.setCart([]);
  }
}