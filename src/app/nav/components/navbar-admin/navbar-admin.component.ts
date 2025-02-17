import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'app/auth/service/auth.service';

@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.css',
})
export class NavbarAdminComponent {
}
