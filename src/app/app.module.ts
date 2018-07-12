import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { BasicDetailsComponent } from './question/add-question/basic-details/basic-details.component';
import { MainDetailsComponent } from './question/add-question/main-details/main-details.component';
import { AdditionalDetailsComponent } from './question/add-question/additional-details/additional-details.component';
import { OptionDetailsComponent } from './question/add-question/main-details/option-details/option-details.component';
import { ActionDetailsComponent } from './question/add-question/action-details/action-details.component';
import { AddQuestionComponent } from './question/add-question/add-question.component';
import { SearchQuestionComponent } from './question/search-question/search-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HeaderComponent,
    BasicDetailsComponent,
    MainDetailsComponent,
    AdditionalDetailsComponent,
    OptionDetailsComponent,
    ActionDetailsComponent,
    AddQuestionComponent,
    SearchQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
