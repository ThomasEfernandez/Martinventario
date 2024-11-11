import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-eliminar-etiqueta-admin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-etiqueta-admin.component.html',
  styleUrl: './eliminar-etiqueta-admin.component.css',
})
export class EliminarEtiquetaAdminComponent {
  @Output()
  etiquetaEliminada: EventEmitter<Etiqueta> = new EventEmitter();

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  listaCategoria: Categoria[] = [];
  listaEtiqueta: Etiqueta[] = [];
  categoriaSeleccionada: Categoria | null = null;
  etiquetaSeleccionada: Etiqueta | null = null;

  formulario = this.fb.nonNullable.group({
    categoriaId: [null as number | null],
    etiquetaId: [null as number | null],
  });

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.listaCategoria = categorias;
      },
      error: (err: Error) => {
        console.error(err.message);
      },
    });
  }

  onCategoriaChange() {
    const categoriaId = this.formulario.value.categoriaId;

    if (categoriaId != null) {
      this.categoriaSeleccionada =
        this.listaCategoria.find((categoria) => categoria.id === categoriaId) ||
        null;

      this.listaEtiqueta = this.categoriaSeleccionada?.etiquetas || [];
    } else {
      this.listaEtiqueta = [];
    }
  }

  eliminarEtiqueta() {
    const etiquetaId = this.formulario.value.etiquetaId;

    if (this.categoriaSeleccionada && etiquetaId !== null) {
      this.listaEtiqueta = this.listaEtiqueta.filter(
        (etiqueta) => etiqueta.id !== etiquetaId
      );

      this.categoriaSeleccionada.etiquetas = this.listaEtiqueta;

      this.categoriaService
        .putCategoria(this.categoriaSeleccionada.id, this.categoriaSeleccionada)
        .subscribe({
          next: () => {
            const etiquetaEliminada = this.listaEtiqueta.find(
              (e) => e.id === etiquetaId
            );
            if (etiquetaEliminada) {
              this.etiquetaEliminada.emit(etiquetaEliminada);
            }
            this.formulario.reset();
          },
          error: (err: Error) => {
            console.error(err.message);
          },
        });
    }
  }
}
