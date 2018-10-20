import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from 'src/app/products/models/book.model';
import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cartItem: CartItemModel;
 
  constructor() {
  }

  ngOnInit() {
  }

}
