import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../../models/posts';
import { faBook, faBookOpen, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-presenter',
  templateUrl: './post-presenter.component.html'
})
export class PostPresenterComponent{

  @Input()
  post: Post;
  @Output()
  toggle = new EventEmitter<any>();
  faBookOpen = faBookOpen;
  faBook = faBook;
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;

  toggleItem(prop: string) {
    this.toggle.emit({
      posts: { ...this.post, [prop]: !this.post[prop] }
    });
  }
}
