import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Array<BookModel>
  constructor() { 

    this.books = [
      {id: 1, name: 'Angular2', price: 100, img:'http://demopavothemes.com/pav_books/image/cache/catalog/demo/product/product03-250x217.jpg' },
      {id: 2, name: 'TypeScript', price: 153, img:'http://demopavothemes.com/pav_books/image/cache/catalog/demo/product/product10-250x217.jpg'},
      {id: 3, name: 'Java', price: 150, img:'http://demopavothemes.com/pav_books/image/cache/catalog/demo/product/product06-250x217.jpg'},
      {id: 4, name: 'DevOps', price: 250, img:'http://demopavothemes.com/pav_books/image/cache/catalog/demo/product/product08-250x217.jpg'}
      
    ];

  }

  ngOnInit() {
  }

}
