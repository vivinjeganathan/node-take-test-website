import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import { QuestionType } from "./question-type.model";
import { CustomSelector } from "./add-question/basic-details/custom-selector/custom-selector.model";
import { Subject } from "./subject.model";


@Injectable()
export class BasicDetailsService {

    allSubjects: [Subject]

    questionTypesURL: string = environment.serverUrl + '/questionType'
    subjectURL: string = environment.serverUrl + '/subject'

    constructor(private http: HttpClient) { }

    getQuestionTypes(): Observable<CustomSelector> {

        return this.http.get(this.questionTypesURL).pipe(map(response => {

                var questionTypesSelector = new CustomSelector
                questionTypesSelector.title = "Question Type"
                questionTypesSelector.options = (response as [QuestionType]).map(questionType => questionType.name)

                console.log(questionTypesSelector)

                return questionTypesSelector
        }))
    }

    getSubjects(): Observable<CustomSelector> {

        return this.http.get(this.subjectURL).pipe(map(response => {

            this.allSubjects = response as [Subject]

            var subjectsSelector = new CustomSelector
            subjectsSelector.title = "Subject"
            subjectsSelector.options = (this.allSubjects).map(subject => subject.name)

            console.log(subjectsSelector)

            return subjectsSelector
        }))
    }

    getUnits(subjectName: string): CustomSelector {

        var unitsSelector = new CustomSelector
        unitsSelector.title = "Unit"
        
        var subject = (this.allSubjects).filter((subject) => 
             (subject.name == subjectName)
        )[0]

        unitsSelector.options = subject.units.map(unit => unit.name)

        console.log(unitsSelector)

        return unitsSelector
    }

    getChapters(subjectName: string, unitName: string): CustomSelector {

        var chaptersSelector = new CustomSelector
        chaptersSelector.title = "Chapter"
        
        var subject = (this.allSubjects).filter((subject) => 
             (subject.name == subjectName)
        )[0]

        var unit = subject.units.filter((unit) => 
            (unit.name == unitName)
        )[0]

        chaptersSelector.options = unit.chapters.map(chapter => chapter.name)

        console.log(chaptersSelector)

        return chaptersSelector
    }
}