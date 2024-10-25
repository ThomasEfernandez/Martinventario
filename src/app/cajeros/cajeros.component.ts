import { Ventas } from './../interfaces/Ventas.interface';
import { Cajeros } from '../interfaces/Cajeros.interface';

import { Component } from '@angular/core';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-cajeros',
  standalone: true,
  imports: [],
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

  registrarVenta ( venta: Ventas ) {
    this.listaventas.generarVenta(venta) ;
    console.log("Venta registrada: ", venta) //prueba
  }

  visualizarVentas() {

  }



}
