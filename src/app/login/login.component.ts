import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from "../services/auth.service";
import { User } from "../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public user: User = new User('','');
  public errorMsg: string = '';

  constructor(
      private service: AuthService, 
      private router: Router
      ) { }

  public login() {
    if(!this.service.login(this.user)){
      this.errorMsg = 'Failed to login';
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
