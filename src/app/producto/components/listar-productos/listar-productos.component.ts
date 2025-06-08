import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent {
  @Input() tipo: string = '';

  ngOnInit(): void {
    this.cargarListaProd();
  }

  listaProductos: Producto[] = [];
  productoService = inject(ProductoService);

  listar(producto: Producto) {
    this.listaProductos.push(producto);
  }

  cargarListaProd() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
