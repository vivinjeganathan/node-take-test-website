import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { QuestionService } from './main-container/question/question.service';
import { SearchQuestionService } from './main-container/question/search-question/search-question.service';
import { AddQuestionService } from './main-container/question/add-question/add-question.service';
import { AppRoutingModule } from './app-routing.module';
import { CustomSelectorComponent } from './main-container/question/add-question/basic-details/custom-selector/custom-selector.component';
import { BasicDetailsService } from './main-container/question/basic-details.service';
import { MainDetailsService } from './main-container/question/add-question/main-details/main-details.service';
import { AddTestComponent } from './main-container/tests/add-test/add-test.component';
import { SearchTestComponent } from './main-container/tests/search-test/search-test.component';
import { TestSummaryComponent } from './main-container/tests/search-test/test-summary/test-summary.component';
import { TestListComponent } from './main-container/tests/search-test/test-list/test-list.component';
import { TestTypeSummaryComponent } from './main-container/tests/search-test/test-type-summary/test-type-summary.component';
import { TestService } from './main-container/tests/test.service';
import { TestBasicDetailsComponent } from './main-container/tests/add-test/test-basic-details/test-basic-details.component';
import { TestAdditionalDetailsComponent } from './main-container/tests/add-test/test-additional-details/test-additional-details.component';
import { TestSubjectSummaryComponent } from './main-container/tests/add-test/test-subject-summary/test-subject-summary.component';
import { TestSubjectDetailsComponent } from './main-container/tests/add-test/test-subject-details/test-subject-details.component';
import { TestSubjectAddComponent } from './main-container/tests/add-test/test-subject-add/test-subject-add.component';
import { TestDetailsComponent } from './main-container/tests/search-test/test-details/test-details.component';
import { TestGroupComponent } from './main-container/tests/search-test/test-group/test-group.component';
import { TestQuestionListModalComponent } from './main-container/tests/add-test/test-question-list-modal/test-question-list-modal.component';
import { TestQuestionSummaryModalComponent } from './main-container/tests/add-test/test-question-summary-modal/test-question-summary-modal.component'
import { AddTestService } from './main-container/tests/add-test/add-test.service';
import { PreviewQuestionPaperComponent } from './main-container/tests/preview-question-paper/preview-question-paper.component';

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
    ManageAccountComponent,
    CustomSelectorComponent,
    AddTestComponent,
    SearchTestComponent,
    TestSummaryComponent,
    TestListComponent,
    TestTypeSummaryComponent,
    TestBasicDetailsComponent,
    TestAdditionalDetailsComponent,
    TestSubjectSummaryComponent,
    TestSubjectDetailsComponent,
    TestSubjectAddComponent,
    TestDetailsComponent,
    TestGroupComponent,
    TestQuestionListModalComponent,
    TestQuestionSummaryModalComponent,
    PreviewQuestionPaperComponent
  ],
  entryComponents: [TestQuestionListModalComponent, PreviewQuestionPaperComponent],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [QuestionService, 
              SearchQuestionService, 
              AddQuestionService, 
              BasicDetailsService, 
              MainDetailsService, 
              TestService,
              AddTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
