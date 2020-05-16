import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/posts';
import { Store } from '../../../store/store';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../service/posts.service';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html'
})
export class PostSingleComponent implements OnInit, OnDestroy {
  id: number;
  subToURl: Subscription;
  post$: Observable<Post> | Observable<boolean>;
  subscription: Subscription;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.subscription = this.postsService.getPosts$.subscribe();
    this.subToURl = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.post$ = this.store.selectItem('posts', this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subToURl.unsubscribe();
  }

}
