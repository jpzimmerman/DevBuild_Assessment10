import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialpostsComponent } from './posts/socialposts/socialposts.component';
import { PostComponent } from './posts/post/post/post.component';
import { PostFormComponent } from './posts/post/post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialpostsComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
