import { Component, inject } from '@angular/core';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-estadistica',
  standalone: true,
  imports: [],
  templateUrl: './listar-estadistica.component.html',
  styleUrl: './listar-estadistica.component.css',
})
export class ListarEstadisticaComponent {
  categoriaService = inject(CategoriaService);
  productoService = inject(ProductoService);
  usuarioService = inject(UsuarioService);

  cat: {
    categoria: string;
    cantidad: number;
  }[] = [];
  tCantidad = 0;
  tCategoria = '';
  uRepositores = 0;
  uCajeros = 0;
  uTotal = 0;

  calcularEstadisticaPorCategoria() {
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        categorias.forEach((c) => {
          let cc = {
            categoria: c.nombreCategoria,
            cantidad: 0,
          };
          this.cat.push(cc);

          this.productoService.getProductos().subscribe({
            next: (productos: Producto[]) => {
              productos.forEach((p) => {
                if (cc.categoria === p.categoria) {
                  cc.cantidad = cc.cantidad + p.cantidad;
                  this.tCantidad = this.tCantidad + p.cantidad;
                }
              });
            },
            error: (err: Error) => {
              console.log(err.message);
            },
          });
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        usuarios.forEach((u) => {
          if (u.tipo === 'repositor') {
            this.uRepositores++;
          } else if ((u.tipo = 'cajero')) {
            this.uCajeros++;
          }
        });
        this.uTotal = this.uRepositores + this.uCajeros;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
  ngOnInit(): void {
    this.calcularEstadisticaPorCategoria();
    this.obtenerUsuarios();
  }
}
