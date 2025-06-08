import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-pedido',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-pedido.component.html',
  styleUrl: './menu-pedido.component.css',
})
export class MenuPedidoComponent {
  @Input() tipo: string = '';
}
