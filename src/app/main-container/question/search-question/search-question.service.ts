import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { QuestionService } from "../question.service";
import { Question } from "../question.model";

@Injectable()
export class SearchQuestionService {

    questions: Question[] = []

    constructor(private questionService: QuestionService,
                private http: HttpClient) { }

    questionsChanged = new EventEmitter<Question[]>()

    getQuestions() {
        
        this.http.get('http://127.0.0.1:3000/question').subscribe(
            (response) => {
                this.questions = response['question'] as [Question]
                this.questionsChanged.emit(this.questions)
            },
            (error) => console.log(error)
        )

        return this.questions
    }

    deleteQuestion(question: Question) {
        this.questions.splice(this.questions.indexOf(question), 1);
        this.questionsChanged.emit(this.questions)
    }
}