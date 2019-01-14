import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TakeTestAccount, AdminUser } from '../manage-account.model';
import { ManageAccountService } from '../manage-account.service';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.css']
})
export class AccountInformationComponent implements OnInit {

  formGroup: FormGroup
  takeTestAccount: TakeTestAccount
  adminUsers: AdminUser[]

  constructor(private formBuilder: FormBuilder,
              private manageAccountService: ManageAccountService,) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      'companyName': new FormControl(''),
      'proprietorName': new FormControl(''),
      'username': new FormControl(''),
      'password': new FormControl(''),      
      'confirmPassword': new FormControl(''),
      'mobileNumber': new FormControl(''),
      'supportEmail': new FormControl(''),
      'supportMobile': new FormControl(''),
      'address':  this.formBuilder.group({ 
        'addressLine1': new FormControl(''),
        'addressLine2': new FormControl(''),
        'city': new FormControl(''),
        'state': new FormControl(''),
        'zip': new FormControl(''),
        'country': new FormControl(''),
      })
    })

    this.takeTestAccount = this.manageAccountService.getTakeTestAccountDetails()
    this.manageAccountService.takeTestAccountChanged.subscribe((takeTestAccount: TakeTestAccount) => {
      
      this.takeTestAccount = this.manageAccountService.takeTestAccount
      this.formGroup.patchValue(this.takeTestAccount)
      this.formGroup.patchValue({'confirmPassword': this.takeTestAccount.password})
    });

  }
  
  onUpdateDetails(){
    this.manageAccountService.updateTakeTestAccountDetail(this.formGroup, this.takeTestAccount)
  }

}
