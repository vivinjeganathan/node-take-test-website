import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SearchQuestionComponent } from "./take-test-home-page/admin-panel/question/search-question/search-question.component";
import { AddQuestionComponent } from "./take-test-home-page/admin-panel/question/add-question/add-question.component";
import { DashboardComponent } from "./take-test-home-page/admin-panel/dashboard/dashboard.component";
import { QuestionComponent } from "./take-test-home-page/admin-panel/question/question.component";
import { TestsComponent } from "./take-test-home-page/admin-panel/tests/tests.component";
import { StudentsComponent } from "./take-test-home-page/admin-panel/students/students.component";
import { ReportsComponent } from "./take-test-home-page/admin-panel/reports/reports.component";
import { ManageAccountComponent } from "./take-test-home-page/admin-panel/manage-account/manage-account.component";
import { SearchTestComponent } from "./take-test-home-page/admin-panel/tests/search-test/search-test.component";
import { AddTestComponent } from "./take-test-home-page/admin-panel/tests/add-test/add-test.component";
import { ProductsComponent } from "./take-test-home-page/admin-panel/products/products.component";
import { SearchProductComponent } from "./take-test-home-page/admin-panel/products/search-product/search-product.component";
import { AddProductComponent } from "./take-test-home-page/admin-panel/products/add-product/add-product.component";
import { StudentSignupComponent } from "./take-test-home-page/student-signup/student-signup.component";
import { TakeTestHomePageComponent } from "./take-test-home-page/take-test-home-page.component";
import { StudentPanelComponent } from "./take-test-home-page/student-panel/student-panel.component";
import { AdminPanelComponent } from "./take-test-home-page/admin-panel/admin-panel.component";

const appRoutes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: TakeTestHomePageComponent},
    { path: 'studentSignup', component: StudentSignupComponent},
    { path: 'student', component: StudentPanelComponent, children: [
        //{ path: 'dashboard', component: SearchQuestionComponent},
    ]},
    { path: 'admin', component: AdminPanelComponent, children: [
        { path: 'dashboard', component: DashboardComponent},
        { path: 'questions', component: QuestionComponent, children: [
            //{ path: '', redirectTo:'/searchQuestions', pathMatch: 'full'},
            { path: 'searchQuestions', component: SearchQuestionComponent},
            { path: 'addQuestion', component: AddQuestionComponent}
        ]},
        { path: 'tests', component: TestsComponent, children: [
            { path: 'searchTest', component: SearchTestComponent},
            { path: 'addTest', component: AddTestComponent}
        ]},
        { path: 'products', component: ProductsComponent, children: [
            { path: 'searchProducts', component: SearchProductComponent},
            { path: 'addProduct', component: AddProductComponent}
        ]},
        { path: 'students', component: StudentsComponent, children: [
            { path: 'searchStudent', component: SearchProductComponent},
            { path: 'addStudent', component: AddProductComponent}
        ]},
        { path: 'reports', component: ReportsComponent},
        { path: 'manageAccount', component: ManageAccountComponent}
    ]},
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}