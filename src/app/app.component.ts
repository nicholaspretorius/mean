import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [];

  onPostAdded(post) {
    console.log('Event: ', post);
    this.posts.push(post);
  }
}
