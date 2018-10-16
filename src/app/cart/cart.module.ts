import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent, CartComponent } from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, CartItemComponent],
  exports: [CartComponent]
})
export class CartModule { }
