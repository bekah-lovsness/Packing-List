import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { CreateListComponent } from './create-list/create-list.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeadingComponent,
    CreateListComponent,
    TravelInfoComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
