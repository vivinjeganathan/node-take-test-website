import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Test } from '../../test.model';

@Component({
  selector: 'app-test-additional-details',
  templateUrl: './test-additional-details.component.html',
  styleUrls: ['./test-additional-details.component.css']
})
export class TestAdditionalDetailsComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  @Input() test: Test

  constructor() { }

  ngOnInit() {
    this.formGroup.addControl('duration', new FormControl(''))
    this.formGroup.addControl('totalMarks', new FormControl(''))
    this.formGroup.addControl('negativeMarking', new FormControl(''))
    this.formGroup.addControl('difficultyLevel', new FormControl(''))
    this.formGroup.addControl('instructionSet', new FormControl(''))

    this.test.duration = typeof this.test.duration == "undefined" ? "" : this.test.duration
    this.test.maxMarks = typeof this.test.maxMarks == "undefined" ? "" : this.test.maxMarks
    this.test.negativeMarkingPercentage = typeof this.test.negativeMarkingPercentage == "undefined" ? "" : this.test.negativeMarkingPercentage
    this.test.difficultyLevel = typeof this.test.difficultyLevel == "undefined" ? "Select" : this.test.difficultyLevel
    //this.test.instructionSet = typeof this.test.instructionSet == "undefined" ? "Select" : this.test.instructionSet
  }

}
