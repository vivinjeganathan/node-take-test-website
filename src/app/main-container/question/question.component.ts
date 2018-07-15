import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { initNgModule } from "@angular/core/src/view/ng_module";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {

  selectedTab = 'searchQuestions'

  constructor() { }

  ngOnInit() {
  }

  onSelectTab(tabName: string) {
    console.log("tabname: " + tabName);
    this.selectedTab = tabName;
  }
}
