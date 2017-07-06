import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService} from "../services/auth.service";
import { User } from "../models/user.model";

// great Regex mailpattern ;-) only demo for this sample 
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user: User = new User('','');
  errorMsg: string = '';
  loginForm: FormGroup;

  constructor(
      private service: AuthService, 
      private router: Router) { 
        this.loginForm = new FormGroup ({
          emailFormControl: new FormControl('', [
              Validators.required,
              Validators.pattern(EMAIL_REGEX)]),
          passwdFormControl: new FormControl('',[
              Validators.required])
  });
      }

  public login() {
    if(!this.service.login(this.user)){
      this.errorMsg = 'Login hat nicht geklappt';
    } else {
      this.errorMsg = '';
      // TODO add guard to protect route
      this.router.navigate(['home']);
      
    }
    return false;
  }

  ngOnInit() {
  }

}
