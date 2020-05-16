import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/posts';

@Component({
  selector: 'app-post-presenter',
  templateUrl: './post-presenter.component.html',
  styleUrls: ['./post-presenter.component.scss']
})
export class PostPresenterComponent{

  @Input()
  post: Post | boolean;
}
