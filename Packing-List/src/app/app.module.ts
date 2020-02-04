import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { CreateListComponent } from './create-list/create-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    CreateListComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
