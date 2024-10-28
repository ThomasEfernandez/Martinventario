import { Component, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent {
  router = inject(Router);
  listaProductos: Producto[] = [];
  productoService = inject(ProductoService);

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.productoService.getProducto().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
