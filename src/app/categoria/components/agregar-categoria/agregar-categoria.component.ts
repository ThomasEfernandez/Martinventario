import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../interfaces/categoria-inteface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css',
})
export class AgregarCategoriaComponent {
  @Output()
  emitirCategoria: EventEmitter<Categoria> = new EventEmitter();

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreCategoria: ['', Validators.required],
    etiquetas: [[]],
  });

  agregarCategoria() {
    if (this.formulario.invalid) return;

    const categoria = this.formulario.getRawValue();

    this.emitirCategoria.emit(categoria);
    this.agregarCategoriaService(categoria);
  }

  agregarCategoriaService(categoria: Categoria) {
    this.categoriaService.postCategoria(categoria).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
