import { Injectable } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItemModel> =[
    {id: 2, name: 'Apahe Camel', price: 10, img:'assets/images/books/camel-250x217.jpg', quantity:3},
    {id: 3, name: 'Pro CSS and HTML', price: 5, img:'assets/images/books/html_css-250x217.jpg', quantity:4}, 
    {id: 4, name: 'Java for dummies', price: 12, img:'assets/images/books/java_for_dummies-250x217.jpg', quantity:2}
  ];

  constructor() { }


  getCartItems(): Array<CartItemModel>{

    return this.cartItems;
  
  }

  addToCart(book: BookModel){
    
  }

  delFromCart(cartItem: CartItemModel){
    
  }

  incQuantity(cartItem: CartItemModel, n: number = 1){

  }

  decQuantity(cartItem: CartItemModel, n: number = 1){

  }

  updateTotals(){

  }




}


