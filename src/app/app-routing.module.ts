import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layout/containers/main/main.component';
import { NotFoundComponent } from './layout/components';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '', component: MainComponent, children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/posts/posts.module')
          .then(m => m.PostsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module')
          .then(m => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module')
          .then(m => m.ContactModule)
      },
    ]
  },
  {
    path: '404', component: MainComponent, children: [
      {
        path: '',  component: NotFoundComponent
      }
    ]
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
