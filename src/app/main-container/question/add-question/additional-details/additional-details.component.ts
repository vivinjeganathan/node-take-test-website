import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {

  additionalDetailsSubForm: FormGroup
  @Output() formInitialized = new EventEmitter<FormGroup>()
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.additionalDetailsSubForm = this.formBuilder.group({
      complexity: null,
      maxTimeLimit: null,
      solutionDescription: null
    })

    this.formInitialized.emit(this.additionalDetailsSubForm);
  }

}
