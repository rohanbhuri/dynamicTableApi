import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'logout', component: LogoutComponent }

];

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [AuthService, AuthGuardService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
