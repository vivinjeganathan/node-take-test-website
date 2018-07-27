import { Injectable } from "@angular/core";
import { QuestionService } from "../question.service";
import { Question } from "../question.model";

@Injectable()
export class AddQuestionService {

    constructor(private questionService: QuestionService) {}

    addQuestion(question: Question) {
        this.questionService.addQuestion(question)
    }
}