import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-egreso',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-egreso.component.html',
  styleUrl: './menu-egreso.component.css',
})
export class MenuEgresoComponent {
  @Input() tipo: string = '';
}
