import { Component, OnInit, Input } from '@angular/core';
import { Test, InstructionSet } from '../test.model';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview-question-paper',
  templateUrl: './preview-question-paper.component.html',
  styleUrls: ['./preview-question-paper.component.css']
})
export class PreviewQuestionPaperComponent implements OnInit {

  @Input() test: Test
  @Input() modalRef: NgbModalRef;
  
  constructor() { }
  
  ngOnInit() {
    var instructionSet = new InstructionSet
    instructionSet.instructions = ["Select an answer for every question. Unanswered questions will be scored as incorrect.", 
    "Click the radio button to indicate your choice. Only one answer can be selected for a multiple choice question.",
     "Click on the Submit button at the bottom of the page to have your answers graded.", 
    "You will be shown your results after the end of the test. "]

    this.test.instructionSet = instructionSet

  }

  onClose() {
    this.modalRef.close('close click')
  }

}
