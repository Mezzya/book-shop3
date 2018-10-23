import { Injectable, OnInit } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';
import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<CartItemModel> =[
    {id: 1, name: 'Apahe Camel', price: 153, img:'assets/images/books/camel-250x217.jpg', quantity:3},
    {id: 2, name: 'Pro CSS and HTML', price: 153, img:'assets/images/books/html_css-250x217.jpg', quantity:4}, 
    {id: 3, name: 'Java for dummies', price: 150, img:'assets/images/books/java_for_dummies-250x217.jpg', quantity:2}
  ];

  // total: number=0;
  // Попытка пробрасывать значение как ссылку для обновления в cart-component
  total = new Number(0);

  constructor() {
    this.updateTotals();
   }

   

  getCartItems(): Array<CartItemModel>{

    return this.cartItems;
  
  }

  addToCart(book: BookModel){

    let found: boolean = false;

    this.cartItems.forEach( e =>{
      if (e.id == book.id) {
        found=true;
        e.quantity++;
      }
    })

    if (!found) this.cartItems.push(new CartItemModel(book.id, book.name, book.price,book.img, 1));
    this.updateTotals();
  }

  delFromCart(cartItem: CartItemModel){
    

        let indx : number;
        indx = this.cartItems.indexOf(cartItem);
        this.cartItems.splice(indx, 1);
        
        this.updateTotals();
  }

  incQuantity(cartItem: CartItemModel, n: number = 1){

    this.cartItems.forEach( e =>{
      if (e.id == cartItem.id) {
        e.quantity++;
      }
    })
    this.updateTotals();
  }

  decQuantity(cartItem: CartItemModel, n: number = 1){

    this.cartItems.forEach( e =>{
      if (e.id == cartItem.id) {
        e.quantity--;
        if (e.quantity==0) this.delFromCart(e);
      }
    })

    this.updateTotals();
    
  }

  private updateTotals(){

    this.total=0;
    this.cartItems.forEach(e =>{
      
      this.total = new Number(this.total.valueOf() +e.price*e.quantity)
      console.log("Total = "+this.total);
    })

  
  }




}


