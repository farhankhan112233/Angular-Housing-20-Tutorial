import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../Services/auth-service';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  showLogoutMenu = false;
  isAdmin: boolean = false;
  constructor(protected auth: AuthService, private router: Router) {}
  ngOnInit() {
    this.isAdmin = this.auth.getRole().toString().toLowerCase() == 'admin';
  }

  toggle() {
    this.showLogoutMenu = !this.showLogoutMenu;
  }

  confirmLogout() {
    this.auth.logout();
    this.showLogoutMenu = false;
    this.router.navigate(['/Auth']);
  }

  cancelLogout() {
    this.showLogoutMenu = false;
  }
}
