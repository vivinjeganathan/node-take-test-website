import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-basic-details',
  templateUrl: './test-basic-details.component.html',
  styleUrls: ['./test-basic-details.component.css']
})
export class TestBasicDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
