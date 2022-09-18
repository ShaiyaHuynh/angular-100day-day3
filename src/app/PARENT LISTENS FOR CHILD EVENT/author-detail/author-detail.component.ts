import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() SelectAuthor = new EventEmitter<Author>();
  @Output() DeleteAuthor = new EventEmitter<Author>();

  constructor() {}

  ngOnInit() {}
}
