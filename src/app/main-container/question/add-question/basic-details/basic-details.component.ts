import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  basicDetailsSubForm: FormGroup
  @Output() formInitialized = new EventEmitter<FormGroup>()
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.basicDetailsSubForm = this.formBuilder.group({
      subject: ['', [Validators.required]],
      unit: null,
      chapter: null,
      type: null
    })

    this.formInitialized.emit(this.basicDetailsSubForm);
  }
}
