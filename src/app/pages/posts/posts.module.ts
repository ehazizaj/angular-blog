import { NgModule } from '@angular/core';
import { AllPostsComponent } from './containers/all-posts/all-posts.component';
import { PostSingleComponent } from './containers/post-single/post-single.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from './service/posts.service';


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
    PostSingleComponent
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
