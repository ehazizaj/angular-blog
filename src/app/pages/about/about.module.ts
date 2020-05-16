import { NgModule } from '@angular/core';
import { AboutComponent } from './containers/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AboutComponent,
    data: { title: 'About Us' }
}
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
