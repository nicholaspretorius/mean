import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  postTitle = '';
  postContent = '';
  postsService: PostsService;

  @Output()
  postCreated = new EventEmitter<Post>();

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  onSavePost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }

    const post: Post = {
      title: postForm.value.postTitle,
      content: postForm.value.postContent
    };

    this.postsService.addPost(
      postForm.value.postTitle,
      postForm.value.postContent
    );

    this.postCreated.emit(post);

    postForm.value.postTitle = '';
    postForm.value.postContent = '';
  }
}
