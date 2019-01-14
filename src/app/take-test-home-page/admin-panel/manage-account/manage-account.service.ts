import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import * as _ from 'lodash';
import { AdminUser, TakeTestAccount } from "./manage-account.model";
import { environment } from "src/environments/environment";
import { FormGroup } from "@angular/forms";

@Injectable()
export class ManageAccountService {

    takeTestAccount: TakeTestAccount
    adminUsers: AdminUser[] = []
    takeTestAccountURL: string = environment.serverUrl + '/takeTestAccount'
    adminUserURL: string = environment.serverUrl + '/adminUser'

    constructor(private http: HttpClient) { }

    takeTestAccountChanged = new EventEmitter<TakeTestAccount>()
    adminUsersChanged = new EventEmitter<AdminUser[]>()

    getTakeTestAccountDetails() {

        let queryParams = new HttpParams();

        // if (!_.isUndefined(params)) {
        //     queryParams = _.isUndefined(chapter) ? queryParams : queryParams.append('chapter', chapter);
        // }

        queryParams = queryParams.append('_id', '');

        this.http.get(this.takeTestAccountURL, { params: queryParams } ).subscribe(
            (response) => {
                this.takeTestAccount = response[0] as TakeTestAccount
                this.takeTestAccountChanged.emit(this.takeTestAccount)
            },
            (error) => console.log(error)
        )

        return this.takeTestAccount
    }

    updateTakeTestAccountDetail(formGroup: FormGroup, takeTestAccount: TakeTestAccount) {

        var json = JSON.parse(JSON.stringify(formGroup.value))
        json['_id'] = takeTestAccount._id

        this.http.patch(this.takeTestAccountURL, json).subscribe(
            
            (response) => {
                //console.log()
                
            } ,
            (error) => console.log(error)
        )
    }

    getAllUsers() {

        let queryParams = new HttpParams();

        // if (!_.isUndefined(params)) {
        //     queryParams = _.isUndefined(chapter) ? queryParams : queryParams.append('chapter', chapter);
        // }

        //queryParams = queryParams.append('_id', '');

        this.http.get(this.adminUserURL, { params: queryParams } ).subscribe(
            (response) => {
                this.adminUsers = response as [AdminUser]
                this.adminUsersChanged.emit(this.adminUsers)
            },
            (error) => console.log(error)
        )

        return this.adminUsers
    }

    OnDeleteAdminUser(adminUser: AdminUser) {
        var deleteUrl = this.adminUserURL + "/" + adminUser._id
        this.http.delete(deleteUrl).subscribe((response) => {

            this.adminUsers.splice(this.adminUsers.indexOf(adminUser), 1);
            this.adminUsersChanged.emit(this.adminUsers)
        }, (error) => console.log(error))
    }
}