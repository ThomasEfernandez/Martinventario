import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IniciarSesionComponent } from './pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component';
import { RealizarPedidoComponent } from "./compra/components/realizar-pedido/realizar-pedido.component";
import { PaginaPedidoComponent } from "./compra/pages/pagina-pedido/pagina-pedido.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IniciarSesionComponent, RealizarPedidoComponent, PaginaPedidoComponent, PaginaPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Martininventario';
}
