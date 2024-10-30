import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../interfaces/categoria-inteface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css',
})
export class ListarCategoriasComponent {
  router = inject(Router);
  listaCategoria: Categoria[] = [];
  categoriaService = inject(CategoriaService);

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
}
