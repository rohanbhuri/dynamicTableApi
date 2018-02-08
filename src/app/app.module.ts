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
  MatDialogModule
} from '@angular/material';


import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard.service';
import { TableService } from './services/table.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateTableComponent } from './components/create-table/create-table.component';
import { TablesComponent } from './components/tables/tables.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tables', component: TablesComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateTableComponent,
    TablesComponent,
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

    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
    CreateTableComponent
  ],
  providers: [AuthService, AuthGuardService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
