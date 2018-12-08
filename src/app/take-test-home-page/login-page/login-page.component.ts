import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  switchVal= 'admin';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router) {}
        // private authenticationService: AuthenticationService,
        // private alertService: AlertService) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // reset login status
      //this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSelectionChange(entry) {
    if (entry.srcElement.value == 'student') {
      this.switchVal = 'student'
    } else {
      this.switchVal = 'admin'
    }
    
  }

  onLogin() {
    
    //this.submitted = true;

    // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    this.loading = true;
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });

    if(this.switchVal == 'student') {
      this.router.navigate(['/student'])
    } else if(this.switchVal == 'admin') {
      this.router.navigate(['/admin'])
    }
  }

}
