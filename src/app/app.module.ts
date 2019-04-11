import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from './Users/Services/data.service';
import { AppRoutes } from './app.routes';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { UserFormComponent } from './Users/Components/user-form/user-form.component';
import { UserListComponent } from './Users/Components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
