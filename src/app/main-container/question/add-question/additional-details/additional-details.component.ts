import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formGroup.addControl('complexity', new FormControl(''))
    this.formGroup.addControl('maxTimeLimit', new FormControl(''))
    this.formGroup.addControl('solutionDescription', new FormControl(''))
  }
}
