import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from "../models/user.model";

// TODO fake user auslagern in BackendMockService
const users: Array<User> = [
      new User("cap@test.com","userpassword","Steve", "Rogers", "Hey, I'm the heroest Avenger"),
      new User("thor@test.com','userpassword", "Thor", "", "Where the **ck is Mjölnir?"),
      new User("logan@test.com','userpassword", "Logan", "", "I'm Logan the Wolverine")
    ];
  

@Injectable()
export class AuthService {

  private userLoggedIn: boolean = false;
  private storedUser: User = new User('','','','','');

  constructor() { }

  public login(user: User): boolean {
    if (!user) { return false };
    
    // first: check if user exists
    this.storedUser = this.findUserByEmail(user.email);
    
    // second: check user credentials
    if ( this.storedUser && this.checkPassword(user.password, this.storedUser.password)) {
      localStorage.setItem("user", JSON.stringify(this.storedUser));
      this.userLoggedIn = true;
      return true;
    }
    return false;
  }

  public isLoggedIn(): boolean {
    return this.getAuthenticatedUser() !== null;
  }

  public logout() {
    // TODO Add error handling for local storage
    localStorage.removeItem("user");
  }

  public getAuthenticatedUser(): User {
      // TODO Add error handling for local storage
      return JSON.parse(localStorage.getItem('user'));
    }

  /*
  * Checken ob user existiert.
  * Hier gemockt, kommt im echten Leben aus einem Backendservice 
  */
  private findUserByEmail(email: string): User {
    return users.find(u => u.email === email) || null;
  }

  private checkPassword(passwort: string, storedPassword: string): boolean {
    return passwort === storedPassword;
  }




}
