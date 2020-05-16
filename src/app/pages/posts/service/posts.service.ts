import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store/store';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, shareReplay  } from 'rxjs/operators';
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
  ) {}


  get posts$(): Observable<Post[]> {
    if (!this.cache$) {
      this.cache$ = this.getPosts$.pipe(
        catchError(() => {
          this.cache$ = null;
          return [];
        }),
        shareReplay(1));
    }
    return this.cache$;
  }

  getPosts$: Observable<any> = this.http
    .get(this.posts)
    .pipe(
      tap(posts => this.store.set('posts', posts)),
      catchError( error => {
        return throwError( 'Something went wrong!' );
      })
    );

  // toggle(event: any) {
  //   this.http
  //     .put(`/api/playlist/${event.track.id}`, event.track)
  //     .map(res => res.json())
  //     .subscribe((track: Song) => {
  //
  //       const value = this.store.value.playlist;
  //
  //       const playlist = value.map((song: Song) => {
  //         if (event.track.id === song.id) {
  //           return { ...song, ...event.track };
  //         } else {
  //           return song;
  //         }
  //       });
  //
  //       this.store.set('playlist', playlist);
  //
  //     });
  // }

}
