import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// MaterialModule was depreciated in version 2.0.0-beta.3
// import { MaterialModule } from '@angular/material';
import { MatInputModule,MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Router Configuration
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,MatButtonModule,MatCardModule,MatMenuModule,MatToolbarModule,MatIconModule,MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
