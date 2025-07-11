import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-listar-categorias',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-categorias.component.html',
  styleUrl: './listar-categorias.component.css',
})
export class ListarCategoriasComponent {
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

  cat: Categoria | undefined = {
    id: '',
    nombreCategoria: '',
    estado: false,
    etiquetas: [],
  };

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

  activarCategoria(id: string | undefined) {
    const encontrado = this.listaCategorias.find((e) => e.id === id);
    this.cat = encontrado;

    if (this.cat) {
      this.cat.estado = true;
      this.categoriaService.putCategoria(this.cat.id, this.cat).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }

  desactivarCategoria(id: string | undefined) {
    const encontrado = this.listaCategorias.find((e) => e.id === id);
    this.cat = encontrado;

    if (this.cat) {
      this.cat.estado = false;
      this.categoriaService.putCategoria(this.cat.id, this.cat).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }
}
