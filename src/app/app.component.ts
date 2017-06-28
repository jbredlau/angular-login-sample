import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  title: string = 'LoginApp';

  // state of login 
  /// TODO: State should be hold in Store-Class
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
  };

}
