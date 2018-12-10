import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

import { InjectionToken, FactoryProvider } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('window');

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window
};

export const WINDOW_PROVIDERS = [
    windowProvider
]

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

@Injectable()
export class AddStudentComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, 
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              @Inject(WINDOW) private window: Window) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'gender': new FormControl(''),
      'username': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'dob': new FormControl(''),
      'password': new FormControl(''),
      'confirmPassword': new FormControl(''),
      'addressLine1': new FormControl(''),
      'addressLine2': new FormControl(''),
      'city': new FormControl(''),
      'state': new FormControl(''),
      'zipCode': new FormControl(''),
      'country': new FormControl(''),
      'interestedExams': new FormControl(''),
    })
  }

  onSendInvite() {
    let link = this.getHostname() + '/studentSignup'
    this.studentService.sendInviteToStudentUser(this.registerForm, link);
  }

  getHostname() : string {
    return location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
  }
}