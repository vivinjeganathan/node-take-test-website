import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Test } from "../test.model";
import { environment } from "src/environments/environment";
import * as _ from 'lodash';
import { Params } from "@angular/router";

@Injectable()
export class SearchTestService {

    test: Test
    testURL: string = environment.serverUrl + '/test'
    tests: Test[] = []
    testsChanged = new EventEmitter<Test[]>()
    testChanged = new EventEmitter<Test>()

    constructor(private http: HttpClient) { }
    
    getTests(params: Params) {
        let examinationGroup = params['examinationGroup'];
        let examination = params['examination'];
        let testCategory = params['testCategory'];

        let queryParams = new HttpParams();

        if (!_.isUndefined(params)) {
            queryParams = _.isUndefined(examinationGroup) ? queryParams : queryParams.append('examinationGroup', examinationGroup);
            queryParams = _.isUndefined(examination) ? queryParams : queryParams.append('examination', examination);
            queryParams = _.isUndefined(testCategory) ? queryParams : queryParams.append('testCategory', testCategory);
        }

        this.tests.length = 0

        this.http.get(this.testURL, { params: queryParams }).subscribe(
            (response) => {
                this.tests = response as Test[]
                this.testsChanged.emit(this.tests)
            },
            (error) => console.log(error)
        )
    
        return this.tests
    }

    getTestDetails(test: Test) {

        let testId = test._id;
        let queryParams = new HttpParams();

        if (!_.isUndefined(testId)) {
            queryParams = queryParams.append('_id', testId)
        }

        this.http.get(this.testURL, { params: queryParams } ).subscribe(
            (response) => {
                this.test = response[0] as Test
                this.testChanged.emit(this.test)
            },
            (error) => console.log(error)
        )
    
        return this.test
    }

    deleteTest(test: Test) {

        var deleteUrl = this.testURL + "/" + test._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.tests.splice(this.tests.indexOf(test), 1);
            this.testsChanged.emit(this.tests)
        }, (error) => console.log(error))
    }
}