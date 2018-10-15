import { Component, OnInit, Input } from '@angular/core';
import { Examination } from '../../test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  @Input() examinations: [Examination] 
  
  constructor() { }

  ngOnInit() {
  }

}
