import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-cajero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-cajero.component.html',
  styleUrl: './menu-cajero.component.css',
})
export class MenuCajeroComponent {
  @Input() tipo: string | null = null;

}
