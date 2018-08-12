import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { QuestionService } from "../question.service";
import { Question } from "../question.model";
import {environment} from '../../../../environments/environment';

@Injectable()
export class SearchQuestionService {

    questions: Question[] = []
    questionURL: string = environment.serverUrl + '/question'

    constructor(private questionService: QuestionService,
                private http: HttpClient) { }

    questionsChanged = new EventEmitter<Question[]>()

    getQuestions() {

        this.http.get(this.questionURL).subscribe(
            (response) => {
                this.questions = response['question'] as [Question]
                this.questionsChanged.emit(this.questions)
                console.log(this.questions)
            },
            (error) => console.log(error)
        )

        return this.questions
    }

    deleteQuestion(question: Question) {

        var deleteUrl = this.questionURL + "/" + question._id
        this.http.delete(deleteUrl).subscribe((response) => {
            console.log(response)
            this.questions.splice(this.questions.indexOf(question), 1);
            this.questionsChanged.emit(this.questions)
        }, (error) => console.log(error))
    }
}