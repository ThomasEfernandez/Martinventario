import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';

@Component({
  selector: 'app-ver-detalle',
  standalone: true,
  imports: [],
  templateUrl: './ver-detalle.component.html',
  styleUrl: './ver-detalle.component.css',
})
export class VerDetalleComponent {
  listaCategorias: Categoria[] = [];

  categoriaService = inject(CategoriaService);
  cat: Categoria | undefined = {
    id: 0,
    nombreCategoria: '',
    estado: false,
    etiquetas: [],
  };

  activarEtiqueta(id: number | undefined) {
    const categoria = this.listaCategorias.find((e) => e.id === id);
    this.cat = categoria;

    if (this.cat) {
      this.cat.etiquetas.forEach((e) => {
        e.estado = true;
      });
    }
  }

  desactivarEtiqueta(id: number | undefined) {
    const categoria = this.listaCategorias.find((e) => e.id === id);
    this.cat = categoria;

    if (this.cat) {
      this.cat.etiquetas.forEach((e) => {
        e.estado = false;
      });
    }
  }
}
