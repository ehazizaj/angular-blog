import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store/store';
import { Observable, throwError } from 'rxjs';
import { tap, catchError  } from 'rxjs/operators';
import { API_TOKEN } from '../../../token';
@Injectable()
export class PostsService {
  constructor(
    private http: HttpClient,
    private store: Store,
    @Inject(API_TOKEN) private posts: string
  ) {}

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
