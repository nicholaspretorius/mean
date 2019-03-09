import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';
  post = {};

  @Output()
  postCreated = new EventEmitter();
  blankPost = {
    title: '',
    content: ''
  };

  constructor() {}

  onSavePost() {
    this.post = {
      title: this.postTitle,
      content: this.postContent
    };
    console.log(this.post);
    this.postCreated.emit(this.post);
    this.postTitle = '';
    this.postContent = '';
  }
}
