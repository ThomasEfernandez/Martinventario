import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fetchProducts } from '../api';
import { Productt } from '../types';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-levantar-api',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './levantar-api.component.html',
  styleUrl: './levantar-api.component.css',
})
export class LevantarApiComponent {
  ngOnInit() {
    this.levantarApi();
  }

  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
    mail: '',
  };

  p: Producto = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    categoria: '',
    etiqueta: '',
  };

  productoService = inject(ProductoService);

  x: number = 0;

  async levantarApi() {
    this.contarProductos();
    const products: Productt[] | null = await fetchProducts();
    if (products) {
      let cont = 0;
      products.forEach((prod) => {
        this.p.nombreProducto = prod.item.product_description.title;
        this.p.id = `${this.x + 1 + cont}`;
        cont++;
        this.productoService.postProducto(this.p).subscribe({
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
