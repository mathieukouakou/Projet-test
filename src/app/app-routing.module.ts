import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {TasksComponent} from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '' , 
    component: HomeComponent
  },
   {
    path: 'login' , 
    component: LoginComponent
  },
  {
    path: 'register' , 
    component: RegisterComponent
  },
  {
    path: 'createTasks' , 
    component: TasksComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
