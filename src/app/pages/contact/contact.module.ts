import { NgModule } from '@angular/core';
import { ContactComponent } from './containers/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackGurad } from './guards/back.gurad';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SuccessComponent } from './containers/success/success.component';
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
  },
  {
    path: 'success',
    component: SuccessComponent,
    data: { title: 'Contacted' },
  },
];

@NgModule({
  declarations: [ContactComponent, SuccessComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ContactModule { }
