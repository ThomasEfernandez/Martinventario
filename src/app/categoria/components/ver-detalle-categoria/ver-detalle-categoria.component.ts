import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-ver-detalle-categoria',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-detalle-categoria.component.html',
  styleUrl: './ver-detalle-categoria.component.css',
})
export class VerDetalleCategoriaComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  catcat = history.state.categoria;

  categoriaService = inject(CategoriaService);

  catArreglo: Categoria[] = [];
  arrEtiquetas: Etiqueta[] = [];

  router = inject(ActivatedRoute);

  categoria: string | null = '';

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.categoria = params.get('cat');
      this.listarEtiqueta(this.catcat.id);
      this.listarCategoria();
    });
  }

  listarEtiqueta(id: string | null) {
    this.categoriaService.getCategoriaById(id).subscribe({
      next: (aux: Categoria) => {
        this.arrEtiquetas = aux.etiquetas;
        console.log(this.arrEtiquetas);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarCategoria() {
    this.categoriaService.getCategorias().subscribe({
      next: (categoria: Categoria[]) => {
        this.catArreglo = categoria;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  activarEtiqueta(id: string | null) {
    const cat = this.catArreglo.find((c) => c.nombreCategoria === this.categoria);
    cat?.etiquetas.forEach((e) => {
      if (e.id === id) {
        e.estado = true;
        this.arrEtiquetas.forEach((e) => {
          if (e.id === id) {
            e.estado = true;
          }
        });
      }
    });

    if (cat?.id) {
      this.categoriaService.putCategoria(cat?.id, cat).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }

  desactivarEtiqueta(id: string | null) {
    const cat = this.catArreglo.find((c) => c.nombreCategoria === this.categoria);
    cat?.etiquetas.forEach((e) => {
      if (e.id === id) {
        e.estado = false;
        this.arrEtiquetas.forEach((e) => {
          if (e.id === id) {
            e.estado = false;
          }
        });
      }
    });

    if (cat?.id) {
      this.categoriaService.putCategoria(cat?.id, cat).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }
}
