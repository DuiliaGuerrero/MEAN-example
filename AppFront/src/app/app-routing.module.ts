import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { SavingsComponent } from './components/savings/savings.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  { 
    path:'users', 
    component: UsersListComponent,
    canActivate: [loginGuard]
  },
  { 
    path: 'goals', 
    component: SavingsComponent,
    canActivate: [loginGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
