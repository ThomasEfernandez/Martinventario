import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarProveedorComponent } from '../../components/modificar-proveedor/modificar-proveedor.component';

@Component({
  selector: 'app-pagina-modificar-proveedores',
  standalone: true,
  imports: [NavbarComponent, ModificarProveedorComponent],
  templateUrl: './pagina-modificar-proveedores.component.html',
  styleUrl: './pagina-modificar-proveedores.component.css',
})
export class PaginaModificarProveedoresComponent {
  user = history.state.user;
}
