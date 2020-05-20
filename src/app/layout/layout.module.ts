import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './containers/main/main.component';
import {
  NavigationComponent,
  FooterComponent,
  NotFoundComponent
} from './components';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MainComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class LayoutModule {
}
