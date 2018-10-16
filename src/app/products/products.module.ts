import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BookComponent } from './components/book/book.component';
import { BookComponent, BookListComponent } from './components/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ProductsModule { }
