import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

import {environment} from '../../../../../environments/environment';
import { QuestionService } from "../question.service";
import { Question } from "../question.model";

@Injectable()
export class AddQuestionService {

    addQuestionURL: string = environment.serverUrl + '/question'

    constructor(private questionService: QuestionService,
                private http: HttpClient) {}

    addQuestion(formGroup: FormGroup) {

        this.http.post(this.addQuestionURL, formGroup.value).subscribe(
            
            (response) => {
                console.log(response)
            } ,
            (error) => console.log(error)
        )
    }

    
}