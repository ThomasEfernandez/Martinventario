import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-eliminar-etiqueta-repositor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-etiqueta-repositor.component.html',
  styleUrl: './eliminar-etiqueta-repositor.component.css',
})
export class EliminarEtiquetaRepositorComponent {
  @Output()
  etiquetaModificada: EventEmitter<Etiqueta> = new EventEmitter();

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  listaCategorias: Categoria[] = [];
  listaEtiquetas: Etiqueta[] = [];
  categoriaSeleccionada: Categoria | undefined;
  em: boolean = false;

  formulario = this.fb.nonNullable.group({
    categoriaId: [0],
    etiquetaId: [0],
  });

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.listaCategorias = categorias;
      },
      error: (err: Error) => {
        console.error(err.message);
      },
    });
  }

  /*actualiza la lista de etiquetas en categoria*/
  onCategoriaChange() {
    const categoriaId = this.formulario.value.categoriaId;
    if (categoriaId !== null) {
      this.categoriaSeleccionada = this.listaCategorias.find(
        (categoria) => categoria.id === categoriaId
      );

      this.listaEtiquetas = this.categoriaSeleccionada?.etiquetas || [];
    }
  }

  cambiarEstadoEtiqueta() {
    const etiquetaId = this.formulario.value.etiquetaId;

    if (this.categoriaSeleccionada && etiquetaId !== null) {
      const etiquetaSeleccionada = this.categoriaSeleccionada.etiquetas.find(
        (e) => e.id === etiquetaId
      );

      if (etiquetaSeleccionada) {
        etiquetaSeleccionada.estado = false;

        this.categoriaService
          .putCategoria(
            this.categoriaSeleccionada.id,
            this.categoriaSeleccionada
          )
          .subscribe({
            next: () => {
              this.etiquetaModificada.emit(etiquetaSeleccionada);
              this.formulario.reset();
              this.em = true;
            },
            error: (err: Error) => {
              console.log(err);
            },
          });
      }
    }
  }
}
