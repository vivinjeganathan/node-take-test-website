import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Examination } from '../test.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {

  examinations: Examination[] = []
  
  constructor(private testService: TestService) { }

  ngOnInit() {

    this.examinations = this.testService.getAllExaminations()

    this.testService.examinationsChanged.subscribe((examinations: Examination) => {
      this.examinations = this.testService.examinations
    });
  }

}
