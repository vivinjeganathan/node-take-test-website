import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { QuestionService } from "../question.service";
import { Question } from "../question.model";
import {environment} from '../../../../../environments/environment';
import * as _ from 'lodash';
import { Params } from "@angular/router";

@Injectable()
export class SearchQuestionService {

    questions: Question[] = []
    questionURL: string = environment.serverUrl + '/question'

    constructor(private questionService: QuestionService,
                private http: HttpClient) { }

    questionsChanged = new EventEmitter<Question[]>()

    getQuestions(params: Params) {

        let subject = params['subject'];
        let unit = params['unit'];
        let chapter = params['chapter'];

        let queryParams = new HttpParams();

        if (!_.isUndefined(params)) {
            queryParams = _.isUndefined(subject) ? queryParams : queryParams.append('subject', subject);
            queryParams = _.isUndefined(unit) ? queryParams : queryParams.append('unit', unit);
            queryParams = _.isUndefined(chapter) ? queryParams : queryParams.append('chapter', chapter);
        }
        
        this.http.get(this.questionURL, { params: queryParams } ).subscribe(
            (response) => {
                this.questions = response as [Question]
                this.questionsChanged.emit(this.questions)
            },
            (error) => console.log(error)
        )

        return this.questions
    }

    deleteQuestion(question: Question) {

        var deleteUrl = this.questionURL + "/" + question._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.questions.splice(this.questions.indexOf(question), 1);
            this.questionsChanged.emit(this.questions)
        }, (error) => console.log(error))
    }
}