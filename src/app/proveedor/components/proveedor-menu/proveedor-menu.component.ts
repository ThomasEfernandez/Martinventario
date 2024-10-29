import { Component } from '@angular/core';
import { AgregarProveedorComponent } from '../agregar-proveedor/agregar-proveedor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedor-menu',
  standalone: true,
  templateUrl: './proveedor-menu.component.html',
  styleUrls: ['./proveedor-menu.component.css'],
  imports: [AgregarProveedorComponent, CommonModule]
})

export class ProveedorMenuComponent {
  opcionSeleccionada: string | null = null;
  mostrarMenu: boolean = true; // Inicializa en true para mostrar el menú desde el principio

  // Método para seleccionar una opción
  seleccionarOpcion(opcion: string): void{
    console.log('Opción seleccionada:', opcion);
    this.opcionSeleccionada = opcion; // Asigna la opción seleccionada
    this.mostrarMenu = false; // Oculta el menú al seleccionar
  }

  // Método para volver a mostrar el menú
  volverAMenu(): void {
    this.opcionSeleccionada = null; // Resetea la opción seleccionada
    this.mostrarMenu = true; // Muestra el menú
  }
}
