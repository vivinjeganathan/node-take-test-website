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
        //console.log(test)
        //"instructionSetID": test.instructionSet,

        var subjectsArray = []

        for (let subject of test.subjects) {
            
            let questionsArray = subject.questions.map(question => question._id)
            let subjectsJson = {"subject" : subject.subject._id, 
                                "maxMarks": subject.maxMarks,
                                "maxNoOfQuestions" : subject.maxNoOfQuestions,
                                "questions": questionsArray}
            subjectsArray.push(subjectsJson)
        }

        let postJson = {"name" : test.name, 
                        "examination": test.examination, 
                        "testCategory": test.testCategory, 
                        "duration": test.duration,
                        "maxMarks": test.maxMarks,
                        "negativeMarkingPercentage": test.negativeMarkingPercentage,
                        "difficultyLevel": test.difficultyLevel,
                        "subjects": subjectsArray}
        
        console.log(postJson)

        // this.http.post(this.addTestURL, testDetails).subscribe(
            
        //     (response) => {
        //         console.log(response)
        //     } ,
        //     (error) => console.log(error)
        // )
    }
}