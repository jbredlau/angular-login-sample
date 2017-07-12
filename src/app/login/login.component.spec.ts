import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { User } from "../models/user.model";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [  RouterTestingModule, 
                  FormsModule, ReactiveFormsModule,
                  MaterialModule, 
                  BrowserAnimationsModule],
      declarations: [ LoginComponent ],
      providers: [AuthService]  
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call the login method from the AuthService', 
        inject([AuthService], (authService: AuthService) => {
          spyOn(authService, 'login');
          component.login();
          expect(authService.login).toHaveBeenCalled;
  }));

  it('loginform should be invalid if credentials are wrong', () => {
          component.user = new User('wronguser', 'wrongpassword');
          component.login();
          expect(component.loginForm.valid).toBeFalsy();
  });


  it('submitting loginform should set correct user in component', () => {
          expect(component.loginForm.valid).toBeFalsy();
          component.loginForm.controls['emailFormControl'].setValue("cap@test.com");
          component.loginForm.controls['passwdFormControl'].setValue("userpassword");
          expect(component.loginForm.valid).toBeTruthy();
          component.login();
          expect(component.user.email).toBe("cap@test.com");
          expect(component.user.password).toBe("userpassword");
  });

  it('loginform should be valid if fields are correct filled', () => {
          expect(component.loginForm.valid).toBeFalsy();
          component.loginForm.controls['emailFormControl'].setValue("cap@test.com");
          component.loginForm.controls['passwdFormControl'].setValue("userpassword");
          expect(component.loginForm.valid).toBeTruthy();
  });

  it('emailfield should be invalid if email adress is empty ', () => {
          let errors = {};
          let email = component.loginForm.controls['emailFormControl'];      
          email.setValue("");
          errors = email.errors || {};
          expect(errors['required']).toBeTruthy();
  });

  it('emailfield should be invalid if wrong email adress', () => {
          let errors = {};
          let email = component.loginForm.controls['emailFormControl'];      
          email.setValue("wrongemail");
          errors = email.errors || {};
          expect(errors['pattern']).toBeTruthy();
  });
  
  it('passwordfield should be invalid if password is empty ', () => {
          let errors = {};
          let password = component.loginForm.controls['passwdFormControl'];      
          password.setValue("");
          errors = password.errors || {};
          expect(errors['required']).toBeTruthy();
  });


});
