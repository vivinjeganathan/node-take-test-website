import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AdminUser } from '../../manage-account.model';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  @Input() adminUser: AdminUser;  
  @Input() number: number;
  @Output() adminUserDeleted = new EventEmitter<AdminUser>();

  
  constructor() { }

  ngOnInit() {
  }

  OnDeleteStudentUser() {

    this.adminUserDeleted.emit(this.adminUser);
  }
}
