import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../../models/posts';
import { faBook, faBookOpen, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html'
})
export class PostsListComponent{
  @Input()
  posts: Post[];
  @Output()
  toggle = new EventEmitter<any>();
  faBookOpen = faBookOpen;
  faBook = faBook;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  toggleItem(index: number, prop: string) {
    const post = this.posts[index];
    this.toggle.emit({
      posts: { ...post, [prop]: !post[prop] }
    });
  }
}
