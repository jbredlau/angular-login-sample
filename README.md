# Sample Angular LoginApp

## Why?

This App is a sample and simple Login Page for exercise purposes. It uses 
            [Angular v4.x](https://angular.io), 
            [angular-material](https://material.angular.io)
            and [angular-flex-layout](https://github.com/angular/flex-layout)
          

For testing the login you can use this credentials: 
          
<ul>
    <li>cap@test.com</li>
    <li>thor@test.com</li>
    <li>logan@test.com</li>
</ul>
<p>
Password for every user is „userpassword“
</p>

&nbsp;
## Components
- AppComponent -> Shell for Application. Contains Toolbar, Navbar and Routing-Configuration
- LoginComponent -> contains LoginForm with Validation
- HomeComponent -> protected Landingpage after succesfull userlogin
- AboutComponent -> unprotected infopage
- AuthService -> contains authentication-logic and fakeuser
- UserModel -> represents an user (email, password, firstname, lastname, comment, avatar)

&nbsp;
## TODOs and known issues
- add more e2e UI-Tests
- implement Angular MockBackend in Repository-Class
- move Fakeusers to Repository-Class
- move Routing-Configuration in seperate RoutingModul
- implement Error-Handling for LocalStorage

&nbsp;
## Build and Run
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

&nbsp;
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

&nbsp;
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

&nbsp;
## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

&nbsp;
## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

&nbsp;
## Upgrade to latest Versions
- Angular CLI
    - `npm install @angular/cli@latest`

- Typescript
    - `npm install typescript@latest --save-dev`

- Angular
    - `npm install @angular/animations@latest @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/cdk@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest rxjs@latest --save`

- Angular FlexLayout 
    - `npm install @angular/flex-layout@latest --save`

- Angular Material
    -`npm install @angular/material@latest --save`

&nbsp;

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
