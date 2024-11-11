import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-eliminar-categoria-repositor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-categoria-repositor.component.html',
  styleUrl: './eliminar-categoria-repositor.component.css',
})
export class EliminarCategoriaRepositorComponent {
  @Output()
  categoriaModificada: EventEmitter<Categoria> = new EventEmitter();

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  listaCategorias: Categoria[] = [];
  categoriaSeleccionada: Categoria | undefined;

  formulario = this.fb.nonNullable.group({
    categoriaId: [0],
  });

  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (categoria: Categoria[]) => {
        this.listaCategorias = categoria;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  cambiarEstadoCategoria() {
    const categoriaId = this.formulario.value.categoriaId;

    if (categoriaId !== null && categoriaId !== undefined) {
      this.categoriaSeleccionada = this.listaCategorias.find(
        (c) => c.id === categoriaId
      );

      if (this.categoriaSeleccionada) {
        this.categoriaSeleccionada.estado = false;

        this.categoriaService
          .putCategoria(categoriaId, this.categoriaSeleccionada)
          .subscribe({
            next: () => {
              this.categoriaModificada.emit(this.categoriaSeleccionada);
              this.formulario.reset();
            },
            error: (err: Error) => {
              console.log(err.message);
            },
          });
      }
    }
  }
}
