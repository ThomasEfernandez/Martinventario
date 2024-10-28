import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from '../../interfaces/categoria-inteface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [],
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
    nombre: ['', Validators.required],
    etiquetas: [], //error al llamar un array, asi funciona pero, esta bien?
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
