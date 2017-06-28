import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {

  constructor(
      private service: AuthService, 
      private router: Router
      ) { }

  ngOnInit() {
    if (! this.service.isLoggedIn()) {
       // TODO add guard to protect route
      this.router.navigate(['login']);
    }
  }

  public logout() {
    this.service.logout();
    this.router.navigate(['login']);
    return false;
  }

}
