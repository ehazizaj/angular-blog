import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store/store';
import { Observable, of, Subject, throwError } from 'rxjs';
import { tap, catchError, shareReplay, takeUntil } from 'rxjs/operators';
import { API_TOKEN } from '../../../token';
import { Post } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private cache$: Observable<Post[]>;


  constructor(
    private http: HttpClient,
    private store: Store,
    @Inject(API_TOKEN) private posts: string
  ) {
  }


  get posts$(): Observable<Post[]> {
    if (!this.cache$) {
      this.cache$ = this.getPosts$.pipe(
        catchError(() => {
          this.cache$ = null;
          return [];
        }),
        shareReplay(1),
      );
    }
    return this.cache$;
  }

  getPosts$: Observable<any> = this.http
    .get(this.posts)
    .pipe(
      tap(posts => this.store.set('posts', posts)),
      catchError(error => {
        return throwError('Something went wrong!');
      })
    );

  toggle(event: any) {
    this.http
      .put( `${this.posts}/${event.posts.id}`, event.posts)
      .subscribe((post: Post) => {
        const value = this.store.value;
        value.posts.set(event.posts.id, post);
        this.store.set('posts', value);
      });
  }

}
