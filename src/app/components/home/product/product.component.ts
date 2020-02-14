import { Component, OnInit } from '@angular/core';
import { Product, ProductsList } from "src/app/models/product";
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  staRR: number[] = [1, 2, 3, 4, 5];
  pList: ProductsList;
  products: Product[] = [];
  product: Product;

  constructor(private _cart: CartService) {
    this.pList = new ProductsList();
    sessionStorage.setItem('cart',JSON.stringify([]));
  }

  ngOnInit() {
    this.products = this.pList.getAllProducts();
  }

  outputDataSend(event: Product) {
    let i: number = this.products.indexOf(event);
  }

  lastProductsCount(id: number) {
    let productCountOnCart: number = this._cart.getCart().filter(p => p.id == id).length;
    return this.products.find(p => p.id == id).quantity - productCountOnCart
  }

  add2Cart(p: Product) {
    if (p != undefined) {
      if (this.lastProductsCount(p.id) > 0) {
        this.product = p;
        let productsOnCart: Product[] = this._cart.getCart();
        productsOnCart.push(p);
        this._cart.setCart(productsOnCart);
        setTimeout(() => {
          this.product = null;
        }, 250);
      }
    }
  }
}
