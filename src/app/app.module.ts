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
  MatMenuModule
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
import { DeleteTableComponent } from './components/delete-table/delete-table.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'add-table', component: CreateUpdateTableComponent },
  { path: 'edit-table/:id', component: CreateUpdateTableComponent },
  { path: 'open-table/:id', component: OpenTableComponent },
  { path: 'delete-table/:id', component: DeleteTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CreateUpdateTableComponent,
    TablesComponent,
    OpenTableComponent,
    DeleteTableComponent
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

    RouterModule.forRoot(appRoutes),
  ],
  entryComponents: [
  ],
  providers: [AuthService, AuthGuardService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
