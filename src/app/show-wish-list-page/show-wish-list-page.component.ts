import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../services/booksearch.service';

@Component({
  selector: 'app-show-wish-list-page',
  templateUrl: './show-wish-list-page.component.html',
  styleUrls: ['./show-wish-list-page.component.scss']
})
export class ShowWishListPageComponent implements OnInit {

  constructor(public bookService: BooksearchService) { }

  ngOnInit(): void {
  }

}
