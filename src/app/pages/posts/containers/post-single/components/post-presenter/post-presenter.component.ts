import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/posts';

@Component({
  selector: 'app-post-presenter',
  templateUrl: './post-presenter.component.html'
})
export class PostPresenterComponent{

  @Input()
  post: Post;
}
