import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../question.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {

  description: String;
  
  @Output() formInitialized = new EventEmitter<FormGroup>()
  mainDetailsSubForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainDetailsSubForm = this.formBuilder.group({
      description: null
    })

    this.formInitialized.emit(this.mainDetailsSubForm);
  }

}
