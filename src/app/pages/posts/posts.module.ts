import { NgModule } from '@angular/core';
import { AllPostsComponent } from './containers/all-posts/containers/all-posts.component';
import { PostSingleComponent } from './containers/post-single/containers/post-single.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from './service/posts.service';
import { PostsListComponent } from './containers/all-posts/components/posts-list/posts-list.component';
import { API_TOKEN } from '../../token';
import { PostsComponent } from './containers/posts/posts.component';
import { PostPresenterComponent } from './containers/post-single/components/post-presenter/post-presenter.component';
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
