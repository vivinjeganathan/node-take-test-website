import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-additional-details',
  templateUrl: './test-additional-details.component.html',
  styleUrls: ['./test-additional-details.component.css']
})
export class TestAdditionalDetailsComponent implements OnInit {
  
  @Input() formGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
