import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './main-container/question/question.component';
import { HeaderComponent } from './header/header.component';
import { BasicDetailsComponent } from './main-container/question/add-question/basic-details/basic-details.component';
import { MainDetailsComponent } from './main-container/question/add-question/main-details/main-details.component';
import { AdditionalDetailsComponent } from './main-container/question/add-question/additional-details/additional-details.component';
import { OptionDetailsComponent } from './main-container/question/add-question/main-details/option-details/option-details.component';
import { ActionDetailsComponent } from './main-container/question/add-question/action-details/action-details.component';
import { AddQuestionComponent } from './main-container/question/add-question/add-question.component';
import { SearchQuestionComponent } from './main-container/question/search-question/search-question.component';
import { QuestionSummaryComponent } from './main-container/question/search-question/question-summary/question-summary.component';
import { DashboardComponent } from './main-container/dashboard/dashboard.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ComponentChildComponent } from './playground/component-child/component-child.component';
import { TestsComponent } from './main-container/tests/tests.component';
import { StudentsComponent } from './main-container/students/students.component';
import { ReportsComponent } from './main-container/reports/reports.component';
import { ManageAccountComponent } from './main-container/manage-account/manage-account.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    BasicDetailsComponent,
    MainDetailsComponent,
    AdditionalDetailsComponent,
    OptionDetailsComponent,
    ActionDetailsComponent,
    AddQuestionComponent,
    SearchQuestionComponent,
    QuestionSummaryComponent,
    DashboardComponent,
    MainContainerComponent,
    PlaygroundComponent,
    ComponentChildComponent,
    TestsComponent,
    StudentsComponent,
    ReportsComponent,
    ManageAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
