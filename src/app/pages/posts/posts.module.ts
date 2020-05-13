import { NgModule } from '@angular/core';
import { AllPostsComponent } from './all-posts/containers/all-posts.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from './service/posts.service';
import { PostsListComponent } from './all-posts/components/posts-list/posts-list.component';


const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent
  },
  // {
  //   path: 'all',
  //   component: AllPostsComponent
  // }
];

@NgModule({
  declarations: [
    AllPostsComponent,
    PostSingleComponent,
    PostsListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [PostsService],
  exports: [
    RouterModule,
    AllPostsComponent,
    PostSingleComponent
  ]
})
export class PostsModule {
}
