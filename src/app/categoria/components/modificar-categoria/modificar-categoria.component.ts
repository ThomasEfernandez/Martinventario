import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-modificar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-categoria.component.html',
  styleUrl: './modificar-categoria.component.css',
})
export class ModificarCategoriaComponent {
  @Input() tipo: string | null = null;

  router = inject(Router);
  activaredRoutes = inject(ActivatedRoute);

  categoriaService = inject(CategoriaService);

  categoriaModificada: boolean = false;

  id: string | null = null;

  categoria: Categoria = {
    id: '',
    nombreCategoria: '',
    estado: false,
    etiquetas: [],
  };

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    nombreCategoria: ['', Validators.required],
  });

  ngOnInit(): void {
    this.activaredRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getCategoriaById(this.id);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  getCategoriaById(id: string | null) {
    this.categoriaService.getCategoriaById(id).subscribe({
      next: (c: Categoria) => {
        this.categoria = c;
        this.formulario.controls['nombreCategoria'].setValue(c.nombreCategoria);
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  modificarCategoria() {
    if (this.formulario.valid) {
      const categoria = this.formulario.getRawValue();
      this.categoria.nombreCategoria = categoria.nombreCategoria;
      this.categoriaService.putCategoria(this.id, this.categoria).subscribe({
        error: (e: Error) => {
          console.log(e.message);
        },
      });
      this.categoriaModificada = true;
    }
  }
}
