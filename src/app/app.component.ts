import { Component } from '@angular/core';
import { Post } from './posts/post.model';
import { PostsService } from './posts/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [];
  postsService: PostsService;

  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

  onPostAdded(post) {
    // console.log('Event: ', post);
    this.posts = this.postsService.getPosts();
  }
}
