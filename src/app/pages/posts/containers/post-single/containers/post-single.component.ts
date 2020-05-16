import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/posts';
import { Store } from '../../../store/store';
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

    this.subToURl = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.post$ = this.store.selectItem('posts', this.id);
    this.subscription = this.postsService.posts$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subToURl.unsubscribe();
  }

}
