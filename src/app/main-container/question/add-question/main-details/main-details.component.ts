import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-main-details',
  templateUrl: './main-details.component.html',
  styleUrls: ['./main-details.component.css']
})
export class MainDetailsComponent implements OnInit {

  @Input() question: Question;
  description: String;
  
  constructor() { }

  ngOnInit() {
  }

}
