import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { StudentService } from '../admin-panel/students/student.service';
import { ActivatedRoute } from '@angular/router';
import { StudentUser } from '../admin-panel/students/student.model';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  registerForm: FormGroup
  studentUser: StudentUser
  updateStudentId = ''
  disableUsername = false
  disableMobileNumber = false

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id'] != undefined) {
      this.updateStudentId = this.activatedRoute.snapshot.params['id']

      this.studentService.studentUsersChanged.subscribe((studentUser: StudentUser) => {
      
        this.studentUser = this.studentService.studentUsers[0]

        this.registerForm.controls['firstName'].setValue(this.studentUser.firstName);
        this.registerForm.controls['lastName'].setValue(this.studentUser.lastName);
        this.registerForm.controls['gender'].setValue(this.studentUser.gender);
        this.registerForm.controls['dob'].setValue(this.studentUser.dateOfBirth);
        
        if (this.studentUser.username != undefined) {
          this.registerForm.controls['username'].setValue(this.studentUser.username);
          this.disableUsername = true
        }

        if (this.studentUser.mobileNumber != undefined) {
          this.registerForm.controls['mobileNumber'].setValue(this.studentUser.mobileNumber);
          this.disableMobileNumber = true
        }

      });
      this.studentUser = this.studentService.getStudentUsers(this.updateStudentId)[0]
    }

    this.registerForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'gender': new FormControl(''),
      'username': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'dob': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl(''),
      'address' : new FormGroup({
          'addressLine1': new FormControl(''),
          'addressLine2': new FormControl(''),
          'city': new FormControl(''),
          'state': new FormControl(''),
          'zipCode': new FormControl(''),
          'country': new FormControl(''),
      }),
      'interestedExams': new FormControl(''),
    })
  }

  OnRegisterClick() {

    if(this.updateStudentId) {
      this.studentService.updateStudentUser(this.registerForm, this.updateStudentId)
    } else {
       this.studentService.addStudentUser(this.registerForm)
       //this.isCollapsed = false
    }
  }
}
