import { BrowserModule, Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import { PostsModule } from './pages/posts/posts.module';
import { Store } from './pages/posts/store/store';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    PostsModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    HttpClientModule,
    Store,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
