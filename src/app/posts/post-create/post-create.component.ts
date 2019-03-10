import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';

  constructor(public postsService: PostsService) {}

  onSavePost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    this.postsService.addPost(
      postForm.value.postTitle,
      postForm.value.postContent
    );

    postForm.resetForm();
  }
}
