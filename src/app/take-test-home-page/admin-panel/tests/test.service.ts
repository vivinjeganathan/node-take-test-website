import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { ExaminationGroup, Examination, TestCategory } from "./test.model";
import {environment} from '../../../../environments/environment';

@Injectable()
export class TestService {

    examinationGroups: ExaminationGroup[] = []
    examinations: Examination[] = []
    testCategories: TestCategory[] = []
    
    examinationGroupURL = environment.serverUrl + '/examinationGroup'
    examinationURL = environment.serverUrl + '/examination'
    testCategoryURL = environment.serverUrl + '/testCategory'

    examinationGroupsChanged = new EventEmitter<ExaminationGroup[]>()
    examinationsChanged = new EventEmitter<ExaminationGroup[]>()
    testCategoriesChanged = new EventEmitter<ExaminationGroup[]>()

    constructor(private http: HttpClient) { }

    getExaminationGroups() {

        this.examinationGroups.length = 0
        this.examinationGroups.push(this.getDummyExaminationGroup())

        this.http.get(this.examinationGroupURL).subscribe(
            (response) => {
                this.examinationGroups = this.examinationGroups.concat(response as [ExaminationGroup])
                this.examinationGroupsChanged.emit(this.examinationGroups)
            },
            (error) => console.log(error)
        )
    
        return this.examinationGroups
    }

    getDummyExaminationGroup(): ExaminationGroup {

        var examinationGroup = new ExaminationGroup
        examinationGroup.name = 'Select'

        return examinationGroup;
    }

    getExaminations(examGroupId: string) {

        this.examinations.length = 0
        this.examinations.push(this.getDummyExamination())

        if(examGroupId) {

            let queryParams = new HttpParams();
            queryParams = queryParams.append('examinationGroup', examGroupId)

            this.http.get(this.examinationURL, { params: queryParams }).subscribe(
                (response) => {
                    this.examinations = this.examinations.concat(response as [Examination])
                    this.examinationsChanged.emit(this.examinations)
                },
                (error) => console.log(error)
            )
        }
    
        return this.examinations
    }

    getDummyExamination(): Examination {

        var examination = new Examination
        examination.name = 'Select'

        return examination;
    }

    getTestCategories(examGroupId: string, examId: string) {
        
        this.testCategories.length = 0
        this.testCategories.push(this.getDummyTestCategory())

        if(examGroupId && examId) {

            let queryParams = new HttpParams();
            queryParams = queryParams.append('examinationGroup', examGroupId)
            queryParams = queryParams.append('examination', examId)
        
            this.http.get(this.testCategoryURL, { params: queryParams } ).subscribe(
                (response) => {
                    this.testCategories = this.testCategories.concat(response as [TestCategory])
                    this.testCategoriesChanged.emit(this.testCategories)
                },
                (error) => console.log(error)
            )
        }
        
        return this.testCategories
    }

    getDummyTestCategory(): TestCategory {

        var testCategory = new TestCategory
        testCategory.name = 'Select'

        return testCategory;
    }
}