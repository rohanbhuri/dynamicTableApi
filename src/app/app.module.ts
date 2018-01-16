import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTabsModule,
  MatProgressSpinnerModule
} from '@angular/material';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { RestaurantService } from './services/restaurant.service';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { RouterTransition } from './router.animations';


import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuardService] },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuardService] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'logout', component: LogoutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ContactUsComponent,
    FaqComponent,
    ProfileComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,

    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8xLGb6Yx0ZOrHAYCsSd8L3E92g8xW1bM'
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [AuthService, AuthGuardService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
