import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria-inteface';
import { CategoriaService } from '../../services/categoria.service';
import { EtiquetaService } from '../../../etiqueta/services/etiqueta.service';
import { Etiqueta } from '../../../etiqueta/interfaces/etiqueta.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css',
})
export class ListarCategoriasComponent {
  router = inject(Router);
  listaCategoria: Categoria[] = [];
  categoriaService = inject(CategoriaService);
  etiquetaService = inject(EtiquetaService);

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.categoriaService.getCategorias().subscribe({
      next: (categoria: Categoria[]) => {
        this.listaCategoria = categoria;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  getEtiquetasByCategoria(id: number) {
    this.categoriaService.getCategoriaById(id).subscribe({
      next: () => {
        this.etiquetaService.getEtiquetas().subscribe({});
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
