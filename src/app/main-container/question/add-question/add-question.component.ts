import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';

import { Question } from '../question.model';
import { AddQuestionService } from './add-question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  providers:[AddQuestionService]
})
export class AddQuestionComponent {

  public addQuestionForm: FormGroup;
  question: Question = new Question("my ques")
  
  constructor(private addQuestionService: AddQuestionService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addQuestionForm = this.formBuilder.group({
    })
  }

  formInitialized(name: string, form: FormGroup) {
    console.log("inside" + name, form)
    this.addQuestionForm.setControl(name, form);
  }
              
  onAddQuestion() {
    this.addQuestionService.addQuestion(this.question)
    console.log(this.addQuestionForm.value)
  } 

  addQuestion(addQuestionForm: FormGroup) {

  }
}
