import { Component, inject } from '@angular/core';
import { fetchProducts } from '../api';
import { Productt, Searchh } from '../types';
import { ProductoService } from 'app/producto/services/producto.service';
import { Producto } from 'app/producto/interfaces/producto.interface';

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

  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  pp: Producto = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    precioCompra: 0,
    precioVenta: 0,
    categoria: '',
    etiqueta: '',
  };

  x: number = 0;

  async main() {
    this.contarProductos();
    const products: Productt[] | null = await fetchProducts();
    if (products) {
      let cont = 0;
      products.forEach((p) => {
        this.pp.nombreProducto = p.item.product_description.title;
        this.pp.precioCompra = p.price.current_retail;
        this.pp.precioVenta = p.price.current_retail * 2;
        this.pp.id = `${this.x + 1 + cont}`;
        cont++;
        this.productoService.postProducto(this.pp).subscribe({
          error: (err: Error) => {
            console.log(err.message);
          },
        });
      });
    } else {
      console.log('No se pudieron obtener los productos.');
    }
  }

  contarProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.x = productos.length;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
