import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-default',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar-default.component.html',
  styleUrl: './navbar-default.component.css',
})
export class NavbarDefaultComponent {}
