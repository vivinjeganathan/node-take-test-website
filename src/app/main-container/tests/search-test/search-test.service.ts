import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Test } from "../test.model";
import { environment } from "src/environments/environment";
import * as _ from 'lodash';

@Injectable()
export class SearchTestService {

    test: Test
    testURL: string = environment.serverUrl + '/test'

    constructor(private http: HttpClient) { }

    testChanged = new EventEmitter<Test>()

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
}