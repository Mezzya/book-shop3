import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartItemComponent]
})
export class CartModule { }
