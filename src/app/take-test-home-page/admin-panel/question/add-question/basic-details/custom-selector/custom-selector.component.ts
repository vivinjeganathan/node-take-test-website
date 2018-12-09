import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ControlContainer, FormControl, AbstractControl } from '@angular/forms';
import { CustomSelector } from './custom-selector.model';

@Component({
  selector: 'app-custom-selector',
  templateUrl: './custom-selector.component.html',
  styleUrls: ['./custom-selector.component.css']
})
export class CustomSelectorComponent implements OnInit {

  @Input() formGroup: FormGroup
  @Input() customSelector: CustomSelector;

  @Output() selectorValueChanged = new EventEmitter<CustomSelector>();

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {

    let selectFormControl = new FormControl('')
    this.formGroup.addControl(this.customSelector.name, selectFormControl)
    selectFormControl.setValue(this.customSelector.selectedOption)

    selectFormControl.valueChanges.subscribe((value) => {

      this.customSelector.selectedOption = value
      this.selectorValueChanged.emit(this.customSelector);

    }); 
  }
}
