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

  listaProcuctos: Producto[] = [];

  pp: Producto = {
    id: '',
    nombreProducto: '',
    cantidad: 10,
    marca: 'mi_super',
    proveedor: 'Fausto',
    precioCompra: 0,
    precioVenta: 0,
    categoria: '',
  };

  async main() {
    const products: Productt[] | null = await fetchProducts();
    if (products) {
      products.forEach((p) => {
        let cont = 0;
        // console.log(p.item.product_description.title);
        // console.log(p.price.current_retail);

        this.pp.nombreProducto = p.item.product_description.title;
        this.pp.precioCompra = p.price.current_retail;
        this.pp.precioVenta = p.price.current_retail * 2;

        this.productoService.getProductos().subscribe({
          next: (productos: Producto[]) => {
            this.listaProcuctos = productos;
          },
        });
        this.pp.id = `${this.listaProcuctos.length + 1 + cont}`;
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
}
