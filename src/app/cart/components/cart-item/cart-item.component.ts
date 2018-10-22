import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartItems: Array<CartItemModel>;
  totalSum: number=0;
  totalCount: number=0;

  
  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    // this.cartItems = [
    //   {id: 2, name: 'Apahe Camel', price: 10, img:'assets/images/books/camel-250x217.jpg', quantity:3},
    //   {id: 3, name: 'Pro CSS and HTML', price: 5, img:'assets/images/books/html_css-250x217.jpg', quantity:4}, 
    //   {id: 4, name: 'Java for dummies', price: 12, img:'assets/images/books/java_for_dummies-250x217.jpg', quantity:2}
    // ]

    this.cartItems= this.cartService.cartItems;
   
    // this.countTotalSum();
  }

  private countTotalSum(){
    this.totalSum=0;
    this.totalCount=0;
   
    this.cartItems.forEach(e =>{
      this.totalSum+=e.price*e.quantity;
      this.totalCount+=e.quantity;
    })

  }
  onMinus(cartItem: CartItemModel){

    console.log("CartItem - cart"+cartItem.name);
    this.countTotalSum();

   this.cartItems.forEach(element => {

    if (element.id ==cartItem.id) {
        if (element.quantity == 1){
          // Delete item from array
        
        } 
        else
        if (element.quantity>=2) element.quantity--;
    }
     
   });
  }

  onPlus(cartItem: CartItemModel){

    console.log("CartItem + cart"+cartItem.name);
    this.countTotalSum();
   this.cartItems.forEach(element => {

    if (element.id ==cartItem.id) {
         element.quantity++;
    }
     
   });
  }
  onDelete(cartItem: CartItemModel){
    this.countTotalSum();
    console.log("CartItem remove cart"+cartItem.name);
    // Delete item from array
  
  }

  onCheckout(){
    // Ofofrmlenie pokupki
    console.log("CartItem Cheakout cartitems");
    
  }

}
