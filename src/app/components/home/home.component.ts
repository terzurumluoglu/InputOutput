import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
  cart : Product[];
  isPayment : boolean = false;
  userName : string = 'User Name';
  constructor(
    private _cart : CartService) {
  }

  ngOnInit() {
    this.cart = this._cart.getCart();
  }

  ngDoCheck(){
    this.cart = this._cart.getCart();
  }
}