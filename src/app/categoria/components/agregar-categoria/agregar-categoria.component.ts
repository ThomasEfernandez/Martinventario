import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css',
})
export class AgregarCategoriaComponent {
  @Input() tipo: string = '';

  fb = inject(FormBuilder);
  categoriaService = inject(CategoriaService);

  categoriaAgregada: boolean = false;

  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreCategoria: ['', Validators.required],
    estado: [true, [Validators.required]],
    etiquetas: [[]],
  });

  agregarCategoria() {
    if (this.formulario.valid) {
      const categoria = this.formulario.getRawValue();
      this.categoriaService.getCategorias().subscribe({
        next: (categorias: Categoria[]) => {
          categoria.id = `${categorias.length + 1}`;
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
