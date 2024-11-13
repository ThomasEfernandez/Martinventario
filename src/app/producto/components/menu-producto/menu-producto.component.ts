import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-producto.component.html',
  styleUrl: './menu-producto.component.css',
})
export class MenuProductoComponent {}
