import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../test.model';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {

  @Input() test: Test
  @Input() number: Number

  constructor() { }

  ngOnInit() {
  }

}
