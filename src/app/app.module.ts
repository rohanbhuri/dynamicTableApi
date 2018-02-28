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
  MatProgressSpinnerModule,
  MatCardModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDividerModule,
  MatMenuModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { TableService } from './services/table.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateUpdateTableComponent } from './components/create-update-table/create-update-table.component';
import { TablesComponent } from './components/tables/tables.component';
import { OpenTableComponent } from './components/open-table/open-table.component';
import { DeleteTableComponent, DeleteTableDilogComponent } from './components/delete-table/delete-table.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DisplayRecordsComponent } from './components/display-records/display-records.component';
import { CreateRecordsComponent } from './components/create-records/create-records.component';
import { DeleteRecordsComponent } from './components/delete-records/delete-records.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tables', component: TablesComponent, canActivate: [AuthGuardService] },
  { path: 'add-table', component: CreateUpdateTableComponent, canActivate: [AuthGuardService] },
  { path: 'edit-table/:id', component: CreateUpdateTableComponent, canActivate: [AuthGuardService] },
  { path: 'open-table/:id', component: OpenTableComponent, canActivate: [AuthGuardService] },
  { path: 'delete-table/:id', component: DeleteTableComponent, canActivate: [AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
  { path: 'add-records/:id', component: CreateRecordsComponent, canActivate: [AuthGuardService] },
  { path: 'display-records/:id', component: DisplayRecordsComponent, canActivate: [AuthGuardService] },
  { path: 'delete-records/:id', component: DeleteRecordsComponent, canActivate: [AuthGuardService] },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateUpdateTableComponent,
    TablesComponent,
    OpenTableComponent,
    DeleteTableComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
    DeleteTableDilogComponent,
    DisplayRecordsComponent,
    CreateRecordsComponent,
    DeleteRecordsComponent
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
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDividerModule,
    MatMenuModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,

    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    DeleteTableDilogComponent
  ],
  providers: [AuthService, AuthGuardService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
