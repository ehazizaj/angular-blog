import { NgModule } from '@angular/core';
import { ContactComponent } from './containers/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackGurad } from './guards/back.gurad';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContactComponent,
    data: { title: 'Contact Page' },
    canDeactivate: [BackGurad]
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
