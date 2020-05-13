import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '../../store/store';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../models/posts';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
})
export class AllPostsComponent implements OnInit, OnDestroy {
  allPosts$: Observable<Post[]>;
  subscription: Subscription;
  constructor(
    private store: Store,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.allPosts$ = this.store.select('posts');
    this.subscription = this.postsService.getPosts$.subscribe();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
