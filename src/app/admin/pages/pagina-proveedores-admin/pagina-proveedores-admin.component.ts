import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProveedorComponent } from 'app/proveedor/components/menu-proveedor/menu-proveedor.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';
import { CommonModule } from '@angular/common';
import { AgregarProveedorAdminComponent } from 'app/proveedor/components/agregar-proveedor-admin/agregar-proveedor-admin.component';

@Component({
  selector: 'app-pagina-proveedores-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuProveedorComponent,
    // NavbarProveedoresAdminComponent,
    ListarProveedorComponent,
  ],
  templateUrl: './pagina-proveedores-admin.component.html',
  styleUrl: './pagina-proveedores-admin.component.css',
})
export class PaginaProveedoresAdminComponent {
  // opcionSeleccionada: string | null = null;
  // mostrarMenu: boolean = true;
  // seleccionarOpcion(opcion: string): void{
  //   console.log('Opción seleccionada:', opcion);
  //   this.opcionSeleccionada = opcion;
  //   this.mostrarMenu = false;
  // }
  // volverAMenu(): void {
  //   this.opcionSeleccionada = null;
  //   this.mostrarMenu = true;
  // }
}
