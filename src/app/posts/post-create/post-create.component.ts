import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onSavePost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    const post: Post = {
      title: postForm.value.postTitle,
      content: postForm.value.postContent
    };

    console.log(post);
    this.postCreated.emit(post);
    postForm.value.postTitle = '';
    postForm.value.postContent = '';
  }
}
