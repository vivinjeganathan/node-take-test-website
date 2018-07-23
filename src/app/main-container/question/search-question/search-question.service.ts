import { Injectable } from "@angular/core";
import { QuestionService } from "../question.service";

@Injectable()
export class SearchQuestionService {

    constructor(private questionService: QuestionService) { }

    getQuestions() {
        
    }
}