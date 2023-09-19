import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostCompoment } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { Post3Component } from './post3/post3.component';

@NgModule({
  declarations: [AppComponent, PostCompoment, Post2Component, Post3Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
