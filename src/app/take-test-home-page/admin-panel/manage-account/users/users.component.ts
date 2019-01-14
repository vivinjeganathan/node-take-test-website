import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../manage-account.model';
import { ManageAccountService } from '../manage-account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  adminUsers: AdminUser[]

  constructor(private manageAccountService: ManageAccountService) { }

  ngOnInit() {

    this.adminUsers = this.manageAccountService.getAllUsers()
    this.manageAccountService.adminUsersChanged.subscribe((adminUsers: [AdminUser]) => {
      this.adminUsers = this.manageAccountService.adminUsers
    });
  }

  OnDeleteAdminUser(adminUser: AdminUser) {
    this.manageAccountService.OnDeleteAdminUser(adminUser)
  }
}
