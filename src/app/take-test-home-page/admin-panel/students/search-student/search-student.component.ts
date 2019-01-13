import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentUser, StudentBatch } from '../student.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExaminationGroup } from '../../tests/test.model';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  formGroup: FormGroup
  studentUsers: StudentUser[]

  constructor(private studentService: StudentService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({

    })

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.studentUsers = this.studentService.getStudentUsers(params)
    });

    this.studentService.studentUsersChanged.subscribe((studentUsers: [StudentUser]) => {
      
      this.studentUsers = this.studentService.studentUsers
    });
    //this.studentUsers = this.studentService.getStudentUsers(null)
  }

  OnSelectExaminationGroup(examinationGroup: ExaminationGroup) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(examinationGroup._id, 'examinationGroup', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  OnSelectStudentBatch(studentBatch: StudentBatch) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(studentBatch._id, 'studentBatch', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  OntextSearch(text: string) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    this.setQueryParam(text, 'searchForText', queryParams)
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: queryParams });
  }

  setQueryParam(value: string, key: string, queryParams: Params) {

    if(value && value != 'Select') {
      queryParams[key] = value
    } else {
      queryParams[key] = null
    }
  }
  
  OnDeleteStudentUser(studentUser: StudentUser) {
    this.studentService.OnDeleteStudentUser(studentUser)
  }
}
