import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-agregar-categoria-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-categoria-admin.component.html',
  styleUrl: './agregar-categoria-admin.component.css',
})
export class AgregarCategoriaAdminComponent {
  @Output()
  emitirCategoria: EventEmitter<Categoria> = new EventEmitter();

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  categoriaAgregada: boolean = false;

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreCategoria: ['', Validators.required],
    estado: [true, [Validators.required]],
    etiquetas: [[]],
  });

  agregarCategoria() {
    if (this.formulario.valid) {
      const categoria = this.formulario.getRawValue();
      this.categoriaService.getCategorias().subscribe({
        next: (categorias: Categoria[]) => {
          categoria.id = categorias.length + 1;
          this.emitirCategoria.emit(categoria);
          this.agregarCategoriaService(categoria);
          this.categoriaAgregada = true;
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarCategoriaService(categoria: Categoria) {
    this.categoriaService.postCategoria(categoria).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
