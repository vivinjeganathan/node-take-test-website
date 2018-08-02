import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { QuestionService } from "../question.service";
import { Question } from "../question.model";


@Injectable()
export class AddQuestionService {

    constructor(private questionService: QuestionService,
                private http: HttpClient) {}

    addQuestion(question: Question) {
        // http://127.0.0.1:3000/question
        this.questionService.addQuestion(question)
        this.http.post('https://take-test-api.herokuapp.com/question', question).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )
    }
}