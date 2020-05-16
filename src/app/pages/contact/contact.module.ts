import { NgModule } from '@angular/core';
import { ContactComponent } from './containers/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContactComponent,
    data: { title: 'Contact Page' }
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
