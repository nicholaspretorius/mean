import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';

  @Output()
  postCreated = new EventEmitter<Post>();

  constructor() {}

  onSavePost() {
    const post: Post = {
      title: this.postTitle,
      content: this.postContent
    };
    console.log(post);
    this.postCreated.emit(post);
    this.postTitle = '';
    this.postContent = '';
  }
}
