import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  
  router = inject(Router);
  usersService = inject(UsersService);

  onClickLogout(){
    localStorage.removeItem('token_goals');
    this.router.navigate(['/login']);
  }
}
