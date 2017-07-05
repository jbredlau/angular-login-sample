import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title: string = 'LoginApp';
  
  constructor(private router: Router, private service: AuthService) {
  };

  public isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

   public logout() {
    this.service.logout();
    this.router.navigate(['login']);
    return false;
  }

  ngOnInit(): void { 
  }

}
