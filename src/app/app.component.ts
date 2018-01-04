import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title = 'LoginApp';
  currentUrl = '';

  constructor(private router: Router,
      private location: Location, private service: AuthService) {
        router.events.subscribe(() => {
          this.currentUrl = location.path();
        });
  };

  public isLoggedIn(): boolean {
    return this.service.isLoggedIn();
  }

   public logout() {
    this.service.logout();
    this.router.navigate(['login']);
    return false;
  }

  public showLoginLink(): boolean {
    return !this.isLoggedIn() && !this.currentUrl.includes('login');
  }

  ngOnInit(): void { }

}
