import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TakeTestAccount, AdminUser } from './manage-account.model';
import { ActivatedRoute } from '@angular/router';
import { ManageAccountService } from './manage-account.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
