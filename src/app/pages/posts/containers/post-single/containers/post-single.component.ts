import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../models/posts';
import { Store } from '../../../store/store';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html'
})
export class PostSingleComponent implements OnInit, OnDestroy {
  id: number;
  subscription: Subscription;
  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
