import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../models/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent{

  @Input()
  posts: Post[];

}
