import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/posts';

@Component({
  selector: 'app-post-presenter',
  templateUrl: './post-presenter.component.html',
  styleUrls: ['./post-presenter.component.scss']
})
export class PostPresenterComponent implements OnInit{

  @Input()
  post: Post;
  ngOnInit() {
    console.log(this.post);
  }
}
