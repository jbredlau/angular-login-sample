import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from "../models/user.model";

@Injectable()
export class AuthService {

  private userLoggedIn: boolean = false;
  
  private currentUser: Subject<User> = new BehaviorSubject<User>(null); 

  constructor() { }

  public login(user: User): boolean {
    if (!user) { return false };
    
    let storedUser = this.findUserByEmail(user.email);
    if ( storedUser && this.checkPassword(user.email, storedUser.email)) {
      localStorage.setItem("user", JSON.stringify(user));
      this.userLoggedIn = true;
      this.setCurrentUser(user);
      return true;
    }
    return false;
  }

  public isLoggedIn(): boolean {
    return this.getAuthenticatedUser() !== null;
  }

  public logout() {
    localStorage.removeItem("user");
  }

  public setCurrentUser(newUser: User): void {
    console.log("Debug: Login-Event geworfen:" + newUser.email);
    this.currentUser.next(newUser);
  }

  public getCurrentUser(): Subject<User> {
    return this.currentUser;
  }
 

  /*
  * Checken ob user existiert. Wenn ja zurückgeben
  * Hier gemockt, kommt im echten Leben aus einem Backendservice 
  */
  private findUserByEmail(email: string): User {
    // fakeusers for sample app
    // TODO fake user auslagern in BackendMockService
    let users: Array<User> = [
      new User('admin@test.com','adminpassword'),
      new User('user@test.com','userpassword')
    ];
    return users.find(u => u.email === email) || null;
  }

  private checkPassword(passwort: string, storedPassword: string): boolean {
    return passwort === storedPassword;
  }

  private getAuthenticatedUser(): User {
      return JSON.parse(localStorage.getItem('user'));
    }



}
