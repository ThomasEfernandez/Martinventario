import { Component, inject } from '@angular/core';
import { Productt } from '../types';
import { fetchProducts } from '../api';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
  selector: 'app-leer-datos',
  standalone: true,
  imports: [],
  templateUrl: './leer-datos.component.html',
  styleUrl: './leer-datos.component.css',
})
export class LeerDatosComponent {
  ngOnInit() {
    this.main();
  }

  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  pp: Producto = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    categoria: '',
    etiqueta: '',
  };

  async main() {
    console.log(await fetchProducts());
    const products: Productt[] | null = await fetchProducts();
    if (products) {
    } else {
      console.log('No se pudieron obtener los productos.');
    }
  }
}
