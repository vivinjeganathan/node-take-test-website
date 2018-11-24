import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

import {environment} from '../../../../environments/environment';
import { TestService } from "../test.service";
import { Test } from "../test.model";

@Injectable()
export class AddTestService {

    addTestURL: string = environment.serverUrl + '/test'

    constructor(private http: HttpClient) {}

    addTest(testDetails: FormGroup,
            test: Test) {

        console.log("test")
        console.log(test)

        // this.http.post(this.addTestURL, testDetails).subscribe(
            
        //     (response) => {
        //         console.log(response)
        //     } ,
        //     (error) => console.log(error)
        // )
    }
}