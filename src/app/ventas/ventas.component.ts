import { Component } from '@angular/core';
import { Ventas } from '../interfaces/Ventas.interface';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {

}
