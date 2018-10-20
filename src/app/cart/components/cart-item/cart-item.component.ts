import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartItems: Array<CartItemModel>;
  
  constructor() { 
    this.cartItems = [
      {id: 2, name: 'Apahe Camel', price: 153, img:'assets/images/books/camel-250x217.jpg', quantity:1},
      {id: 3, name: 'Pro CSS and HTML', price: 153, img:'assets/images/books/html_css-250x217.jpg', quantity:1}, 
      {id: 4, name: 'Java for dummies', price: 150, img:'assets/images/books/java_for_dummies-250x217.jpg', quantity:1}
    ]
  }

  ngOnInit() {
  }

}
