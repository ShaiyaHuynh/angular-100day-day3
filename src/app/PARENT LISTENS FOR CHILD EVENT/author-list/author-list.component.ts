import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  selectedAuthor = authors[0];
  selected = '';
  constructor() {}

  ngOnInit() {}

  OnSelectAuthor(author: Author) {
    this.selectedAuthor = author;
    // this.selected = author.id + ' ' + author.firstName;
  }
  OnDeleteAuthor(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
    if (author == this.selectedAuthor) {
      this.selectedAuthor = this.authors[0];
      // OnSelectAuthor(author);
    }
  }
}
