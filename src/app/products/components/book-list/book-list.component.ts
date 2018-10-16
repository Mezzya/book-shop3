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
      {id: 1, name: 'Angular2', price: 10, img:'/img/angular2.jpg' },
      {id: 2, name: 'TypeScript', price: 15, img:'/img/ts.jpg'},
      {id: 3, name: 'Java', price: 150, img:'/img/java.jpg'}
      
    ];

  }

  ngOnInit() {
  }

}
