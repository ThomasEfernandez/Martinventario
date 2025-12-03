import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent {
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

  ngOnInit(): void {
    this.cargarListaProd();
  }

  listaProductos: Producto[] = [];
  productoService = inject(ProductoService);

  //Filtrado de Productos, variables de busqueda
  productosFiltrados: Producto[] = [];

  textoBusqueda: string = '';
  filtroCategoria: string = '';
  filtroProveedor: string = '';

  listar(producto: Producto) {
    this.listaProductos.push(producto);
  }

  cargarListaProd() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
        this.productosFiltrados = productos;

        this.listaProductos.sort((a, b) => Number(a.id) - Number(b.id));
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  /*Filtro por texto*/
  onBusquedaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.textoBusqueda = input.value;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.productosFiltrados = this.listaProductos.filter(producto => {

      const cumpleTexto = !this.textoBusqueda ||
        producto.nombreProducto.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        producto.marca.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        producto.id.toString().includes(this.textoBusqueda);

      return cumpleTexto;
    });
  }
}
