import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItemModel>

  constructor() {
    this.cartItems = [
      {id:1, name:'Book1', price: 10, img:'/img/book1.jpg', quantity:1},
      {id:2, name:'Book2', price: 15, img:'/img/book2.jpg', quantity:2},
      {id:3, name:'Book3', price: 17, img:'/img/book3.jpg', quantity:3},
      
    ]
   }

  ngOnInit() {
  }

}
