import { Injectable } from '@angular/core';
import { User } from "./user.model";

@Injectable()
export class AuthService {

  constructor() { }

  login(user: User): boolean {
    if (!user) { return false };

    let storedUser = this.findUserByEmail(user.email);
    if ( storedUser && this.checkPassword(user.email, storedUser.email)) {
      localStorage.setItem("user", user.toString());
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.getAuthenticatedUser() !== null;
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

  private getAuthenticatedUser(): any {
      return localStorage.getItem('user');
    }


}
