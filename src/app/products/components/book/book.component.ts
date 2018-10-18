import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { ProductsModule } from '../../products.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book: BookModel;

  @Output()
  buy: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit() {
  }

  // Return buy book
  onBuyBook(event: any){
    console.log(`Book buy ${this.book.name}`);
    this.buy.emit(this.book);
  }

}
