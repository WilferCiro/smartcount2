import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import {TranslateService} from "@ngx-translate/core";
import { Base64 } from 'js-base64';

import { Routes } from '@frontend/core';
import { AuthService, LicenseService } from "@frontend/core";
import { CompanyService } from "@frontend/shared";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  public routes = Routes
  password = 'password';
  show = false;

  form = new FormGroup({
    company: new FormControl("uva3", [Validators.required]),
    username: new FormControl("jvera@uva3.com", [Validators.required]),
    password: new FormControl("123", [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(
    private authenticationService: AuthService,
    private companyService: CompanyService,
    private licenseService: LicenseService,
  ) {}

  submit() {
    if (this.form.valid) {
      this.companyService.checkCompany("" + this.form.value.company)
        .subscribe(response => {
          try {
            this.licenseService.checkLicense(response.id);
            localStorage.setItem('dsn', Base64.encode(response.dsn));

            this.authenticationService.login(
              {
                login: this.form.value.username,
                password: this.form.value.password
              }
            );
          } catch (e) {
            localStorage.clear();
            console.log(e);
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  togglePassword() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

}
