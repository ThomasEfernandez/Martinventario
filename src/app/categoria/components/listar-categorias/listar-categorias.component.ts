import { Component, inject } from '@angular/core';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css',
})
export class ListarCategoriasComponent {
  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listar() {
    this.categoriaService.getCategorias().subscribe({
      next: (categoria: Categoria[]) => {
        this.listaCategorias = categoria;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.listar();
  }
}
