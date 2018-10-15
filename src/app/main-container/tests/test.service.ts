import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Test, Examination } from "./test.model";
import {environment} from '../../../environments/environment';
import { Params } from "@angular/router";

@Injectable()
export class TestService {

    examinations: Examination[] = []
    examinationURL: string = environment.serverUrl + '/examination'

    constructor(private http: HttpClient) { }

    examinationsChanged = new EventEmitter<Examination[]>()

    getAllExaminations() {

        this.http.get(this.examinationURL).subscribe(
            (response) => {
                this.examinations = response as [Examination]
                this.examinationsChanged.emit(this.examinations)
            },
            (error) => console.log(error)
        )

        return this.examinations
    }
}