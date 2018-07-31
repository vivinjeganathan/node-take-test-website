import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SearchQuestionComponent } from "./main-container/question/search-question/search-question.component";
import { AddQuestionComponent } from "./main-container/question/add-question/add-question.component";
import { DashboardComponent } from "./main-container/dashboard/dashboard.component";
import { QuestionComponent } from "./main-container/question/question.component";
import { TestsComponent } from "./main-container/tests/tests.component";
import { StudentsComponent } from "./main-container/students/students.component";
import { ReportsComponent } from "./main-container/reports/reports.component";
import { ManageAccountComponent } from "./main-container/manage-account/manage-account.component";

const appRoutes: Routes = [
    { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'questions', component: QuestionComponent, children: [
        //{ path: '', redirectTo:'/searchQuestions', pathMatch: 'full'},
        { path: 'searchQuestions', component: SearchQuestionComponent},
        { path: 'addQuestion', component: AddQuestionComponent}
    ]},
    { path: 'tests', component: TestsComponent},
    { path: 'students', component: StudentsComponent},
    { path: 'reports', component: ReportsComponent},
    { path: 'manageAccount', component: ManageAccountComponent}
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}