import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentBatchService } from '../../studentBatch.service';
import { TestService } from '../../../tests/test.service';
import { StudentBatch } from '../../student.model';
import { ExaminationGroup } from '../../../tests/test.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-by-details',
  templateUrl: './search-by-details.component.html',
  styleUrls: ['./search-by-details.component.css']
})
export class SearchByDetailsComponent implements OnInit {

  @Input() formGroup: FormGroup

  examinationGroups: ExaminationGroup[] = []
  studentBatches: StudentBatch[]

  @Output() examinationGroupsValueChanged = new EventEmitter<ExaminationGroup>();
  @Output() studentBatchesValueChanged = new EventEmitter<StudentBatch>();
  @Output() searchByValueChanged = new EventEmitter<string>();
  
  constructor(private studentBatchService: StudentBatchService,
              private testService: TestService,
              private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    let selectExamination = new FormControl('')
    let selectStudentBatch = new FormControl('')

    this.formGroup.addControl('examinationGroup', selectExamination)
    this.formGroup.addControl('studentBatch', selectStudentBatch)
    this.formGroup.addControl('searchBy', new FormControl(''))

    this.studentBatches = this.studentBatchService.getStudentBatchs(null)

    selectExamination.valueChanges.subscribe((value) => {

      let examGroup = this.examinationGroups.filter(examinationGroup => (examinationGroup.name == value))[0]
      this.examinationGroupsValueChanged.emit(examGroup)
    }); 

    selectStudentBatch.valueChanges.subscribe((value) => {

      let exam = this.studentBatches.filter(studentBatch => (studentBatch.name == value))[0]
      this.studentBatchesValueChanged.emit(exam)
    });

    this.studentBatchService.studentBatchesChanged.subscribe((studentBatches: StudentBatch[]) => {
      this.studentBatches = studentBatches
    })

    this.examinationGroups = this.testService.getExaminationGroups()
    this.testService.examinationGroupsChanged.subscribe((examinationGroups: ExaminationGroup[]) => {
      
      this.examinationGroups = this.testService.examinationGroups
    });
  }

  onSearchTap() {
    this.searchByValueChanged.emit(this.formGroup.get('searchBy').value)
  }
}
