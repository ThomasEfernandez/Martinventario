import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-base',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-base.component.html',
  styleUrl: './navbar-base.component.css',
})
export class NavbarBaseComponent {}
