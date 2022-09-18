import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './PARENT LISTENS FOR CHILD EVENT/author-list/author-list.component';
import { AuthorDetailComponent } from './PARENT LISTENS FOR CHILD EVENT/author-detail/author-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
