import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ControlContainer, FormControl } from '@angular/forms';
import { CustomSelector } from './custom-selector.model';

@Component({
  selector: 'app-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.css']
})
export class CustomSelectorComponent implements OnInit {

  public basicDetailsSubForm: FormGroup
  public selectFormControl: FormControl

  @Input() customSelector: CustomSelector;
  @Output() questionTypeChanged = new EventEmitter<CustomSelector>();
  @Output() subjectChanged = new EventEmitter<CustomSelector>();
  @Output() unitChanged = new EventEmitter<CustomSelector>();
  @Output() chapterChanged = new EventEmitter<CustomSelector>();

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.basicDetailsSubForm = <FormGroup>this.controlContainer.control;
    this.selectFormControl = new FormControl();

    this.selectFormControl.valueChanges.subscribe((value) => {
      console.log(value);
      this.customSelector.selectedOption = value

      if (this.customSelector.title == "Question Type") {
        this.questionTypeChanged.emit(this.customSelector);
      } else if (this.customSelector.title == "Subject") {
        this.subjectChanged.emit(this.customSelector);
      } else if (this.customSelector.title == "Unit") {
        this.unitChanged.emit(this.customSelector);
      } else if (this.customSelector.title == "Chapter") {
        this.chapterChanged.emit(this.customSelector);
      }

    }); 
  }
}