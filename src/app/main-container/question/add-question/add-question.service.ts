import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

import { QuestionService } from "../question.service";
import { Question } from "../question.model";

@Injectable()
export class AddQuestionService {

    constructor(private questionService: QuestionService,
                private http: HttpClient) {}

    addQuestion(questionFormObject: FormGroup) {
        //https://take-test-api.herokuapp.com/question
        
        let questionModel = new Question(questionFormObject)
        console.log("in question service" + JSON.stringify(questionModel) )
        // this.questionService.addQuestion(questionModel)
        this.http.post('http://127.0.0.1:3000/question', questionModel).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
    }
}