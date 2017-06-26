import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { User } from './user.model';

describe('AuthService', () => {

  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('login should return false if user undefined or null', inject([AuthService], (service: AuthService) => {
    expect(service.login(undefined)).toBeFalsy();
    expect(service.login(null)).toBeFalsy();
  }));

  it('login should return false if user not exists', inject([AuthService], (service: AuthService) => {
    user = new User("notexists@test.com","");
    expect(service.login(user)).toBeFalsy();
  }));

  it('should return true if user credentials are ok', inject([AuthService], (service: AuthService) => {
    user = new User('admin@test.com','adminpassword');
    expect(service.login(user)).toBeTruthy();
    user = new User('user@test.com','userpassword');
    expect(service.login(user)).toBeTruthy();
  }));



});
