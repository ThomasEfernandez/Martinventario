import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-agregar-etiqueta-repositor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-etiqueta-repositor.component.html',
  styleUrl: './agregar-etiqueta-repositor.component.css',
})
export class AgregarEtiquetaRepositorComponent {
  @Output()
  emitirEtiqueta: EventEmitter<Etiqueta> = new EventEmitter();

  fb = inject(FormBuilder);

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaEtiquetas: Etiqueta[] | undefined = [];

  categoria: number | undefined = 0;

  etiquetaAgregada: boolean = false;

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreEtiqueta: ['', Validators.required],
    nombreCategoria: ['', Validators.required],
  });

  agregarEtiqueta() {
    if (this.formulario.valid) {
      const etiqueta = this.formulario.getRawValue();
      this.categoriaService.getCategoriaById(this.categoria).subscribe({
        next: (categoria: Categoria) => {
          let e = {
            id: categoria.etiquetas.length + 1,
            nombreEtiqueta: etiqueta.nombreEtiqueta,
          };
          categoria.etiquetas.push(e);
          this.emitirEtiqueta.emit(etiqueta);
          this.agregarEtiquetaService(categoria);
          this.etiquetaAgregada = true;
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
      this.categoria = categoria?.id;
    });
  }
}
