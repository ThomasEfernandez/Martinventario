import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { EditarProductoComponent } from "../../../producto/components/editar-producto/editar-producto.component";

@Component({
  selector: 'app-modificar-productos-repositor',
  standalone: true,
  imports: [NavbarAdminComponent, EditarProductoComponent],
  templateUrl: './modificar-productos-repositor.component.html',
  styleUrl: './modificar-productos-repositor.component.css'
})
export class ModificarProductosRepositorComponent {
  tipo: string = 'repositor';
}
