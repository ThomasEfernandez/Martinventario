import { Component } from '@angular/core';
import { ListarProductosComponent } from "../../../producto/components/listar-productos/listar-productos.component";
import { RealizarPedidoComponent } from "../../components/realizar-pedido/realizar-pedido.component";
import { RouterModule } from '@angular/router';
  
@Component({
  selector: 'app-pagina-pedido',
  standalone: true,
  imports: [ListarProductosComponent, RealizarPedidoComponent,RouterModule],
  templateUrl: './pagina-pedido.component.html',
  styleUrl: './pagina-pedido.component.css'
})
export class PaginaPedidoComponent {

}
