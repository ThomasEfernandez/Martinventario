import { AddEventListenerOptions } from './../../../../node_modules/undici-types/patch.d';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-ver-detalle',
  standalone: true,
  imports: [],
  templateUrl: './ver-detalle.component.html',
  styleUrl: './ver-detalle.component.css',
})
export class VerDetalleComponent {
  categoriaService = inject(CategoriaService);
  catArreglo: Categoria[] = [];
  arrEtiquetas: Etiqueta[] = [];
  router = inject(ActivatedRoute);
  id: string | null = '';

  eti: Etiqueta | undefined = {
    id: '',
    nombreEtiqueta: '',
    estado: false,
  };

  ngOnInit(): void {
    document.getElementById('boton')?.addEventListener('click', () => {
      this.listarEtiqueta(this.id);
    });
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.listarEtiqueta(this.id);
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
    const cat = this.catArreglo.find((c) => c.id === this.id);
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
    const cat = this.catArreglo.find((c) => c.id === this.id);
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
