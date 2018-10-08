import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule, MatCardModule, MatMenuModule,
  MatIconModule, MatButtonModule, MatToolbarModule,
  MatSidenavModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatDialogModule, MatInputModule,
   MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,MatButtonModule,MatSidenavModule,
    MatIconModule, MatListModule,  MatTableModule,
    MatPaginatorModule, MatSortModule, MatDialogModule,
    MatInputModule,MatFormFieldModule, MatOptionModule, MatSelectModule,
    MatGridListModule, MatCardModule,MatMenuModule, AppRoutingModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
