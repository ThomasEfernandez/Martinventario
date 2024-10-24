import { Component } from '@angular/core';
import { Cajeros } from '../interfaces/Cajeros.interface';
import { ProductosComponent } from '../productos/productos.component';
import { VentasComponent } from '../ventas/ventas.component';

@Component({
  selector: 'app-cajeros',
  standalone: true,
  imports: [ProductosComponent,
            VentasComponent
  ],
  templateUrl: './cajeros.component.html',
  styleUrl: './cajeros.component.css'
})
export class CajerosComponent {
  listaCajeros: Set<Cajeros> = new Set<Cajeros>() ;

  //registrar venta

  //visualizar ventas



}
