import { Proveedores } from '../interfaces/Porveedores.interface';

import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})

export class ProveedoresComponent {
  listaProveedores: Set<Proveedores> = new Set<Proveedores>() ;

  agregarProveedor (nuevoProveedor:Proveedores) {
    this.listaProveedores.add(nuevoProveedor) ;
  }

  eliminarProveedorPorCuit (cuit: number) {
    let eliminar: Proveedores | undefined ; //para que tenga valor por defecto

    this.listaProveedores.forEach(element => {
      if ( element.cuit === cuit ) {
        eliminar = element ;
      }
    }) ;

    if ( eliminar ) {
      this.listaProveedores.delete(eliminar) ;
      console.log(`Proveedor con cuit ${{cuit}} fue eliminado.`) ; //prueba
    } else {
      console.log(`Proveedor con cuit ${{cuit}} no encontrado.`) ; //prueba
    }
  }
}
