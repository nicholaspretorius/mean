import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [
    { title: 'Post Title 1', content: 'First post content' },
    { title: 'Post Title 2', content: 'Second post content' },
    { title: 'Post Title 3', content: 'Third post content' }
  ];

  constructor() {}

  ngOnInit() {
    this.posts = [];
  }
}
