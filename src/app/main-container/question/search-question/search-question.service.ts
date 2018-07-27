import { Injectable } from "@angular/core";
import { QuestionService } from "../question.service";
import { Question } from "../../../question/question.model";

@Injectable()
export class SearchQuestionService {

    constructor(private questionService: QuestionService) { }

    getQuestions() {
        return this.questionService.getQuestions()
    }

    deleteQuestion(question: Question) {
        this.questionService.deleteQuestion(question)
    }
}