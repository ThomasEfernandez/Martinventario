import { Component } from '@angular/core';
import { Cajeros } from '../../interfaces/Cajeros.interface';

@Component({
  selector: 'app-agregar-cajero',
  standalone: true,
  imports: [],
  templateUrl: './agregar-cajero.component.html',
  styleUrl: './agregar-cajero.component.css'
})
export class AgregarCajeroComponent {
  listaCajeros: Set<Cajeros> = new Set<Cajeros>() ;

  agregarCajero ( nuevoCajero:Cajeros ) {
    this.listaCajeros.add(nuevoCajero) ;
  }
}
