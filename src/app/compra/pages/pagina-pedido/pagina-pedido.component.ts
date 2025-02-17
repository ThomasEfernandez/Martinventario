import { Component } from '@angular/core';
import { ListarProductosComponent } from "../../../producto/components/listar-productos/listar-productos.component";
import { RealizarPedidoComponent } from "../../components/realizar-pedido/realizar-pedido.component";
import { RouterModule } from '@angular/router';
import { VolverAProductoComponent } from "../../../producto/components/volver-a-producto/volver-a-producto.component";
import { NavbarDefaultComponent } from "../../../nav/components/navbar-default/navbar-default.component";
  
@Component({
  selector: 'app-pagina-pedido',
  standalone: true,
  imports: [ListarProductosComponent, RealizarPedidoComponent, RouterModule, VolverAProductoComponent, NavbarDefaultComponent],
  templateUrl: './pagina-pedido.component.html',
  styleUrl: './pagina-pedido.component.css'
})
export class PaginaPedidoComponent {

}
