import { Component } from '@angular/core';
import { fetchProducts } from '../api';

@Component({
  selector: 'app-cargar-datos',
  standalone: true,
  imports: [],
  templateUrl: './cargar-datos.component.html',
  styleUrl: './cargar-datos.component.css',
})
export class CargarDatosComponent {
  ngOnInit() {
    this.main();
  }

  async main() {
    const products = await fetchProducts();
    if (products) {
      console.log(products); // Muestra los productos en consola
    } else {
      console.log('No se pudieron obtener los productos.');
    }
  }
}
