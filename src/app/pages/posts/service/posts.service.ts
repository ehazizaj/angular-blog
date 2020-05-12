import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '../store/store';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class PostsService {
  url = 'http://localhost:3000/posts';
  getPosts$: Observable<any> = this.http
    .get(this.url)
    .pipe(
      tap(next => this.store.set('posts', next))
    );
  constructor(
    private http: HttpClient,
    private store: Store
  ) {}

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
