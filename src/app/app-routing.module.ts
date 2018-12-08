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
import { SearchTestComponent } from "./main-container/tests/search-test/search-test.component";
import { AddTestComponent } from "./main-container/tests/add-test/add-test.component";
import { ProductsComponent } from "./main-container/products/products.component";
import { SearchProductComponent } from "./main-container/products/search-product/search-product.component";
import { AddProductComponent } from "./main-container/products/add-product/add-product.component";
import { StudentSignupComponent } from "./student-panel/student-signup/student-signup.component";
import { TakeTestHomePageComponent } from "./take-test-home-page/take-test-home-page.component";
import { HeaderComponent } from "./header/header.component";
import { StudentPanelComponent } from "./student-panel/student-panel.component";

const appRoutes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: TakeTestHomePageComponent},
    { path: 'studentSignup', component: StudentSignupComponent},
    { path: 'student', component: StudentPanelComponent, children: [
        //{ path: 'dashboard', component: SearchQuestionComponent},
    ]},
    { path: 'admin', component: HeaderComponent, children: [
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
        { path: 'students', component: StudentsComponent},
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