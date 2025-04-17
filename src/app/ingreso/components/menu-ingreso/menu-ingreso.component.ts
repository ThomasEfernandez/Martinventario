import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-ingreso',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-ingreso.component.html',
  styleUrl: './menu-ingreso.component.css',
})
export class MenuIngresoComponent {
  @Input() tipo: string = '';
}
