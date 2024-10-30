import { Component } from '@angular/core';
import { AgregarProveedorComponent } from '../agregar-proveedor/agregar-proveedor.component';
import { CommonModule } from '@angular/common';
import { ListarProveedorComponent } from '../listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-proveedor-menu',
  standalone: true,
  templateUrl: './proveedor-menu.component.html',
  styleUrls: ['./proveedor-menu.component.css'],
  imports: [AgregarProveedorComponent, CommonModule, ListarProveedorComponent]
})

export class ProveedorMenuComponent {
  opcionSeleccionada: string | null = null;
  mostrarMenu: boolean = true;


  seleccionarOpcion(opcion: string): void{
    console.log('Opción seleccionada:', opcion);
    this.opcionSeleccionada = opcion;
    this.mostrarMenu = false;
  }

  volverAMenu(): void {
    this.opcionSeleccionada = null;
    this.mostrarMenu = true;
  }
}
