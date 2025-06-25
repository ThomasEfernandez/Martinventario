import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-agregar-etiqueta',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-etiqueta.component.html',
  styleUrl: './agregar-etiqueta.component.css',
})
export class AgregarEtiquetaComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaEtiquetas: Etiqueta[] | undefined = [];

  categoria: string | null = '';

  etiquetaAgregada: boolean = false;

  etiquetaRepetida: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreEtiqueta: ['', Validators.required],
    nombreCategoria: ['', Validators.required],
    estado: [true, [Validators.required]],
  });

  agregarEtiqueta() {
    if (this.formulario.valid) {
      const etiqueta = this.formulario.getRawValue();

      this.categoriaService.getCategoriaById(this.categoria).subscribe({
        next: (categoria: Categoria) => {
          this.listaEtiquetas = categoria.etiquetas;
          if (this.listaEtiquetas) {
            this.listaEtiquetas.forEach((e) => {
              if (e.nombreEtiqueta === etiqueta.nombreEtiqueta) {
                this.etiquetaRepetida = true;
              }
            });
          }

          if (this.etiquetaRepetida === false) {
            let e = {
              id: `${categoria.etiquetas.length + 1}`,
              nombreEtiqueta: etiqueta.nombreEtiqueta,
              estado: etiqueta.estado,
            };
            console.log(e);

            categoria.etiquetas.push(e);
            this.agregarEtiquetaService(categoria);
            this.etiquetaAgregada = true;
          }
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarEtiquetaService(categoria: Categoria) {
    this.categoriaService.putCategoria(categoria.id, categoria).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.listaCategorias = categorias;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.listarCategorias();
    document.getElementById('categoria')?.addEventListener('click', () => {
      const select = document.getElementById('categoria') as HTMLSelectElement;
      const categoria = this.listaCategorias.find(
        (c) => c.nombreCategoria === select.value
      );
      if (categoria) {
        this.categoria = categoria.id;
      }
    });
  }
}
