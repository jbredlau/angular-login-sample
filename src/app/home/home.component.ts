import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from "../services/auth.service";
import { User } from "../models/user.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  private user: User = new User('','','','','');

  constructor(
      private service: AuthService, 
      private router: Router,
      ) { }

  ngOnInit() {
    if (! this.service.isLoggedIn()) {
       // TODO add guard to protect route
      this.router.navigate(['login']);
    } else {
      this.user = this.service.getAuthenticatedUser(); 
    }
  }

}
