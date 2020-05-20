import { NgModule } from '@angular/core';
import {
  AllPostsComponent,
  PostPresenterComponent,
  PostsComponent,
  PostSingleComponent,
  PostsListComponent
} from './containers';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { API_TOKEN } from '../../token';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '', component: AllPostsComponent, data: { title: 'Home' }
      },
      {
        path: ':id', component: PostSingleComponent, data: { title: 'Post Details' },
      },
    ]
  }
];

@NgModule({
  declarations: [
    AllPostsComponent,
    PostSingleComponent,
    PostsListComponent,
    PostsComponent,
    PostPresenterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: API_TOKEN, useValue: 'http://localhost:3000/posts' }
  ],
  exports: [
    RouterModule,
    AllPostsComponent,
    PostSingleComponent
  ]
})
export class PostsModule {
}
