import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import { QuestionType } from "./question-type.model";
import { CustomSelector } from "./add-question/basic-details/custom-selector/custom-selector.model";
import { Subject } from "./subject.model";


@Injectable()
export class BasicDetailsService {

    allSubjects: [Subject]

    questionTypesSelector: CustomSelector
    subjectsSelector: CustomSelector
    unitsSelector: CustomSelector
    chaptersSelector: CustomSelector

    questionTypesURL: string = environment.serverUrl + '/questionType'
    subjectURL: string = environment.serverUrl + '/subject'

    constructor(private http: HttpClient) { }

    getQuestionTypes(): Observable<CustomSelector> {

        return this.http.get(this.questionTypesURL).pipe(map(response => {
                
            this.questionTypesSelector.options = (response as [QuestionType]).map(questionType => questionType.name)
            return this.questionTypesSelector
        }))
    }

    getSubjects(): Observable<CustomSelector> {

        return this.http.get(this.subjectURL).pipe(map(response => {

            this.allSubjects = response as [Subject]

            this.subjectsSelector.options = this.subjectsSelector.options.concat((this.allSubjects).map(subject => subject.name))
            return this.subjectsSelector
        }))
    }

    getUnits(subjectName: string): CustomSelector {

        this.unitsSelector.options.length = 0
        this.unitsSelector.options.push('Select')

        if (subjectName != 'Select' && subjectName.length > 0) {

            var subject = (this.allSubjects).filter((subject) => 
                (subject.name == subjectName)
            )[0]

            this.unitsSelector.options = this.unitsSelector.options.concat(subject.units.map(unit => unit.name))
        }
        
        return this.unitsSelector
    }

    getChapters(subjectName: string, unitName: string): CustomSelector {
        
        this.chaptersSelector.options.length = 0
        this.chaptersSelector.options.push('Select')

        if (subjectName != 'Select' && unitName != 'Select' && subjectName.length > 0  && unitName.length > 0) {

            var subject = (this.allSubjects).filter((subject) => 
                (subject.name == subjectName)
            )[0]

            var unit = subject.units.filter((unit) => 
                (unit.name == unitName)
            )[0]

            this.chaptersSelector.options = this.chaptersSelector.options.concat(unit.chapters.map(chapter => chapter.name))
        }

        return this.chaptersSelector
    }

    createSelectors() {

        this.questionTypesSelector = new CustomSelector
        this.questionTypesSelector.name = "type"
        this.questionTypesSelector.title = "Question Type"
        this.questionTypesSelector.options.push('Select')

        this.subjectsSelector = new CustomSelector
        this.subjectsSelector.name = "subject"
        this.subjectsSelector.title = "Subject"
        this.subjectsSelector.options.push('Select')

        this.unitsSelector = new CustomSelector
        this.unitsSelector.name = "unit"
        this.unitsSelector.title = "Unit"
        this.unitsSelector.options.push('Select')

        this.chaptersSelector = new CustomSelector
        this.chaptersSelector.name = "chapter"
        this.chaptersSelector.title = "Chapter"
        this.chaptersSelector.options.push('Select')
    }
}