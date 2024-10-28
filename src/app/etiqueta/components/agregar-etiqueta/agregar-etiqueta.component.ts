import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Etiqueta } from '../../interfaces/etiqueta.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EtiquetaService } from '../../services/etiqueta.service';
import { RouterModule } from '@angular/router';
import { CategoriaService } from '../../../categoria/services/categoria.service';
import { Categoria } from '../../../categoria/interfaces/categoria-inteface';

@Component({
  selector: 'app-agregar-etiqueta',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-etiqueta.component.html',
  styleUrl: './agregar-etiqueta.component.css',
})
export class AgregarEtiquetaComponent {
  @Output()
  emitirEtiqueta: EventEmitter<Etiqueta> = new EventEmitter();

  fb = inject(FormBuilder);

  etiquetaService = inject(EtiquetaService);

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreEtiqueta: ['', Validators.required],
    nombreCategoria: [''],
  });

  agregarEtiqueta() {
    if (this.formulario.invalid) return;
    const etiqueta = this.formulario.getRawValue();
    this.emitirEtiqueta.emit(etiqueta);
    this.agregarEtiquetaService(etiqueta);
  }

  agregarEtiquetaService(etiqueta: Etiqueta) {
    this.etiquetaService.postEtiqueta(etiqueta).subscribe();
  }

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  ngOnInit(): void {
    this.listarCategorias();
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
}
