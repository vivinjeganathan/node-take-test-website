import { Component, OnInit } from "@angular/core";
import { initNgModule } from "@angular/core/src/view/ng_module";

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit{

    questionCreated = false
    dynamicValue = 'Test';
    allowNewServer = false;
    questionDescription = 'test'
    questionsArray = ['sample1', 'sample2']

    constructor() {
        setTimeout(()=> {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {

    }
    onCreateQuestion() {
        this.questionsArray.push(this.questionDescription)
        this.questionCreated = true
        this.dynamicValue = 'question created with description ' + this.questionDescription;
    }

    onEditDescription(event: any) {
        this.questionDescription = (<HTMLInputElement>event.target).value
    }
}
