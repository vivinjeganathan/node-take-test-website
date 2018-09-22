import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

import {environment} from '../../../../environments/environment';
import { QuestionService } from "../question.service";
import { Question } from "../question.model";

@Injectable()
export class AddQuestionService {

    addQuestionURL: string = environment.serverUrl + '/question'

    constructor(private questionService: QuestionService,
                private http: HttpClient) {}

    addQuestion(questionFormObject: FormGroup) {

        let questionModel = new Question(questionFormObject)
        // this.questionService.addQuestion(questionModel)
        this.http.post(this.addQuestionURL, questionModel).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
    }

    
}