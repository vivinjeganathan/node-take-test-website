import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

import { InjectionToken, FactoryProvider } from '@angular/core';
import { StudentUser, StudentBatch } from '../student.model';
import { StudentBatchService } from '../studentBatch.service';
import { ExaminationGroup } from '../../tests/test.model';
import { TestService } from '../../tests/test.service';

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
  isInviteSent = false
  sendInviteButtonTitle = 'Send Invite'
  updateDetailsButtonTitle = 'Add a student'
  studentUser: StudentUser
  studentBatches: StudentBatch[]
  examinationGroups: ExaminationGroup[] = []

  constructor(private formBuilder: FormBuilder, 
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private studentBatchService: StudentBatchService,
              private testService: TestService,
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
      'studentGroup': new FormControl('')
    })

    this.studentBatches = this.studentBatchService.getStudentBatchs(null)

    this.studentBatchService.studentBatchesChanged.subscribe((studentBatches: StudentBatch[]) => {
      this.studentBatches = studentBatches
    })

    this.examinationGroups = this.testService.getExaminationGroups()
    this.testService.examinationGroupsChanged.subscribe((examinationGroups: ExaminationGroup[]) => {
      
      this.examinationGroups = this.testService.examinationGroups
    });

  }

  onSendInvite() {
    
    let link = this.getHostname() + '/studentSignup'
    this.studentService.sendInviteToStudentUser(this.registerForm, link);

    this.studentService.inviteSent.subscribe((student: StudentUser) => {
       
      this.studentUser = student
      this.isInviteSent = true
      this.sendInviteButtonTitle = 'Resend Invite'
      this.updateDetailsButtonTitle = 'Update Details'

    });
  }

  onUpdateDetails(){
    if(this.isInviteSent) {
      this.studentService.updateStudentUser(this.registerForm, this.studentUser._id, "Invitation Sent")
    } else {
      this.studentService.addStudentUser(this.registerForm, "Invitation Pending")

      this.studentService.studentAdded.subscribe((student: StudentUser) => {
       
        this.studentUser = student
      });
    }
  }

  getHostname() : string {
    return location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
  }
}