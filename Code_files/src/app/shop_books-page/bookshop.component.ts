import { Component } from '@angular/core';
import { books } from '../shop_services/books';


@Component({
  selector: 'app-bookshop',
  templateUrl: './bookshop.component.html',
  styleUrls: ['./bookshop.component.css']
})
export class BookshopComponent {
  //get books array from file
  books = [...books];

}
