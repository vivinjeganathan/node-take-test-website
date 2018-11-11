import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Test, Examination, TestCategory } from "./test.model";
import {environment} from '../../../environments/environment';
import { Params } from "@angular/router";

@Injectable()
export class TestService {

    examinations: Examination[] = []
    examinationURL: string = environment.serverUrl + '/examination'

    constructor(private http: HttpClient) { }

    examinationsChanged = new EventEmitter<Examination[]>()

    getAllExaminations() {

        this.examinations.push(this.getDummyExamination())

        this.http.get(this.examinationURL).subscribe(
            (response) => {
                
                this.examinations = this.examinations.concat(response as [Examination])
                this.examinationsChanged.emit(this.examinations)
            },
            (error) => console.log(error)
        )
    
        return this.examinations
    }

    getDummyExamination(): Examination {

        var examination = new Examination
        examination.name = 'Select'

        return examination;
    }

    getTestCategories(examName: string) {

        var testCategories : TestCategory[] = []
        testCategories.push(this.getDummyTestCategory())

        if (examName != 'Select' && examName.length > 0) {

            var examination = (this.examinations).filter((exam) => 
                (exam.name == examName)
            )[0]

            testCategories = testCategories.concat(examination.testCategory)
        }
        
        return testCategories
    }

    getDummyTestCategory(): TestCategory {

        var testCategory = new TestCategory
        testCategory.name = 'Select'

        return testCategory;
    }
}