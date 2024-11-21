import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-compra',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-compra.component.html',
  styleUrl: './menu-compra.component.css',
})
export class MenuCompraComponent {
  @Input() tipo: string = '';
}
