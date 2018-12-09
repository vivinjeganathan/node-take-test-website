import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { QuestionComponent } from './take-test-home-page/admin-panel/question/question.component';
import { BasicDetailsComponent } from './take-test-home-page/admin-panel/question/add-question/basic-details/basic-details.component';
import { MainDetailsComponent } from './take-test-home-page/admin-panel/question/add-question/main-details/main-details.component';
import { AdditionalDetailsComponent } from './take-test-home-page/admin-panel/question/add-question/additional-details/additional-details.component';
import { OptionDetailsComponent } from './take-test-home-page/admin-panel/question/add-question/main-details/option-details/option-details.component';
import { ActionDetailsComponent } from './take-test-home-page/admin-panel/question/add-question/action-details/action-details.component';
import { AddQuestionComponent } from './take-test-home-page/admin-panel/question/add-question/add-question.component';
import { SearchQuestionComponent } from './take-test-home-page/admin-panel/question/search-question/search-question.component';
import { QuestionSummaryComponent } from './take-test-home-page/admin-panel/question/search-question/question-summary/question-summary.component';
import { DashboardComponent } from './take-test-home-page/admin-panel/dashboard/dashboard.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ComponentChildComponent } from './playground/component-child/component-child.component';
import { TestsComponent } from './take-test-home-page/admin-panel/tests/tests.component';
import { StudentsComponent } from './take-test-home-page/admin-panel/students/students.component';
import { ReportsComponent } from './take-test-home-page/admin-panel/reports/reports.component';
import { ManageAccountComponent } from './take-test-home-page/admin-panel/manage-account/manage-account.component';
import { QuestionService } from './take-test-home-page/admin-panel/question/question.service';
import { SearchQuestionService } from './take-test-home-page/admin-panel/question/search-question/search-question.service';
import { AddQuestionService } from './take-test-home-page/admin-panel/question/add-question/add-question.service';
import { AppRoutingModule } from './app-routing.module';
import { CustomSelectorComponent } from './take-test-home-page/admin-panel/question/add-question/basic-details/custom-selector/custom-selector.component';
import { BasicDetailsService } from './take-test-home-page/admin-panel/question/basic-details.service';
import { MainDetailsService } from './take-test-home-page/admin-panel/question/add-question/main-details/main-details.service';
import { AddTestComponent } from './take-test-home-page/admin-panel/tests/add-test/add-test.component';
import { SearchTestComponent } from './take-test-home-page/admin-panel/tests/search-test/search-test.component';
import { TestSummaryComponent } from './take-test-home-page/admin-panel/tests/search-test/test-summary/test-summary.component';
import { TestListComponent } from './take-test-home-page/admin-panel/tests/search-test/test-list/test-list.component';
import { TestTypeSummaryComponent } from './take-test-home-page/admin-panel/tests/search-test/test-type-summary/test-type-summary.component';
import { TestService } from './take-test-home-page/admin-panel/tests/test.service';
import { TestBasicDetailsComponent } from './take-test-home-page/admin-panel/tests/add-test/test-basic-details/test-basic-details.component';
import { TestAdditionalDetailsComponent } from './take-test-home-page/admin-panel/tests/add-test/test-additional-details/test-additional-details.component';
import { TestSubjectSummaryComponent } from './take-test-home-page/admin-panel/tests/add-test/test-subject-summary/test-subject-summary.component';
import { TestSubjectDetailsComponent } from './take-test-home-page/admin-panel/tests/add-test/test-subject-details/test-subject-details.component';
import { TestSubjectAddComponent } from './take-test-home-page/admin-panel/tests/add-test/test-subject-add/test-subject-add.component';
import { TestDetailsComponent } from './take-test-home-page/admin-panel/tests/search-test/test-details/test-details.component';
import { TestGroupComponent } from './take-test-home-page/admin-panel/tests/search-test/test-group/test-group.component';
import { TestQuestionListModalComponent } from './take-test-home-page/admin-panel/tests/add-test/test-question-list-modal/test-question-list-modal.component';
import { TestQuestionSummaryModalComponent } from './take-test-home-page/admin-panel/tests/add-test/test-question-summary-modal/test-question-summary-modal.component'
import { AddTestService } from './take-test-home-page/admin-panel/tests/add-test/add-test.service';
import { PreviewQuestionPaperComponent } from './take-test-home-page/admin-panel/tests/preview-question-paper/preview-question-paper.component';
import { SearchTestService } from './take-test-home-page/admin-panel/tests/search-test/search-test.service';
import { ProductsComponent } from './take-test-home-page/admin-panel/products/products.component';
import { SearchProductComponent } from './take-test-home-page/admin-panel/products/search-product/search-product.component';
import { AddProductComponent } from './take-test-home-page/admin-panel/products/add-product/add-product.component';
import { StudentPanelComponent } from './take-test-home-page/student-panel/student-panel.component';
import { StudentSignupComponent } from './take-test-home-page/student-signup/student-signup.component';
import { TakeTestHomePageComponent } from './take-test-home-page/take-test-home-page.component';
import { LoginPageComponent } from './take-test-home-page/login-page/login-page.component';
import { AdminSignupComponent } from './take-test-home-page/admin-signup/admin-signup.component';
import { AdminPanelComponent } from './take-test-home-page/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    BasicDetailsComponent,
    MainDetailsComponent,
    AdditionalDetailsComponent,
    OptionDetailsComponent,
    ActionDetailsComponent,
    AddQuestionComponent,
    SearchQuestionComponent,
    QuestionSummaryComponent,
    DashboardComponent,
    AdminPanelComponent,
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
    PreviewQuestionPaperComponent,
    ProductsComponent,
    SearchProductComponent,
    AddProductComponent,
    StudentPanelComponent,
    StudentSignupComponent,
    TakeTestHomePageComponent,
    LoginPageComponent,
    AdminSignupComponent
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
              AddTestService,
              SearchTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
