import { Ventas } from './../interfaces/Ventas.interface';
import { Cajeros } from '../interfaces/Cajeros.interface';

import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { VentasComponent } from '../ventas/ventas.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cajeros',
  standalone: true,
  imports: [ProductosComponent,
            VentasComponent,
            RouterModule
  ],
  templateUrl: './cajeros.component.html',
  styleUrl: './cajeros.component.css'
})
export class CajerosComponent {
  listaCajeros: Set<Cajeros> = new Set<Cajeros>() ;
  listaventas: VentasComponent ; //referencia

  constructor() {
    this.listaventas = new VentasComponent() ;
  }

  agregarCajero ( nuevoCajero:Cajeros ) {
    this.listaCajeros.add(nuevoCajero) ;
  }

  eliminarCajeroPorId (id:number) {
    let eliminarCajero: Cajeros | undefined ; //para que tenga valor por defecto

    this.listaCajeros.forEach(element => {
      if ( element.id === id ) {
        element.estado = false ;
        eliminarCajero = element ;
      }
    }) ;

    if ( eliminarCajero ) {
      this.listaCajeros.delete(eliminarCajero) ;
      console.log(`Cajero con id ${{id}} fue eliminado.`) ; //prueba
    } else {
      console.log(`Cajero con id ${{id}} no encontrado.`) ; //prueba
    }
  }

  eliminarCajeroPorUsuario (usuario: string) {
    let eliminarCajero: Cajeros | undefined ;

    this.listaCajeros.forEach(element => {
      if ( element.usuario === usuario ) {
        element.estado = false ;
        eliminarCajero = element ;
      }
    }) ;

    if ( eliminarCajero ) {
      this.listaCajeros.delete(eliminarCajero) ;
      console.log(`Cajero con nombre: ${{usuario}} fue eliminado.`) ; //prueba
    } else {
      console.log(`Cajero con nombre: ${{usuario}} no encontrado.`) ; //prueba
    }
  }

  buscarCajeroPorId (id:number) {
    let encontrado: Cajeros | undefined ;

    this.listaCajeros.forEach((element)=>{
      if ( element.id === id ) {
        encontrado = element ;
      }
    })

    //codigo de prueba
    if ( encontrado ) {
      console.log("Cajero encontrado: ", encontrado) ;
    } else {
      console.log(`Cajero con id ${{id}} no encontrado`) ;
    }

    return encontrado ;
  }

  buscarCajeroPorUsuario (usuario:string) {
    let encontrado: Cajeros | undefined ;

    this.listaCajeros.forEach((element)=>{
      if ( element.usuario === usuario ) {
        encontrado = element ;
      }
    })

    //codigo de prueba
    if ( encontrado ) {
      console.log("Cajero encontrado: ", encontrado) ;
    } else {
      console.log(`Cajero con usuario: ${{usuario}} no encontrado`) ;
    }

    return encontrado ;
  }

  registrarVenta ( venta: Ventas ) {
    this.listaventas.generarVenta(venta) ;
    console.log("Venta registrada: ", venta) //prueba
  }

  visualizarVentas() {

  }



}
