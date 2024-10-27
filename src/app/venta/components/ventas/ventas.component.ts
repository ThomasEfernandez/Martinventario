import { Ventas } from '../../interfaces/Ventas.interface';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosComponent } from '../../../productos/productos.component';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [ProductosComponent,RouterModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
  mapaVentas: Map<number, Ventas> = new Map() ;

  generarVenta( venta:Ventas ) {
    this.mapaVentas.set(venta.id, venta) ;
  }

  eliminarVentaPorId ( id:number ) {
    if ( this.mapaVentas.has(id) ) {
      this.mapaVentas.delete(id) ;
    } else {
      console.log(`Venta con id ${{id}} no encontrada.`) ; //prueba
    }
  }

  buscarVentaPorId (id: number) {
    const encontrado: Ventas[] = [] //array vacio, donde se almacena venta encontrada

    this.mapaVentas.forEach(element => {
      if ( element.id === id ) {
        encontrado.push(element) ;
      }
    }) ;

    return encontrado ;
  }

  buscarVentaPorCajeroId (cajeroId: number) {
    const encontrado: Ventas[] = [] //array vacio, donde se almacena venta encontrada

    this.mapaVentas.forEach(element => {
      if ( element.id === cajeroId ) {
        encontrado.push(element) ;
      }
    }) ;

    return encontrado ;
  }




}
