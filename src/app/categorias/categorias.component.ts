import { Component } from '@angular/core';
import { Categorias } from '../interfaces/Categorias.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule,
            RouterModule,
            NavbarComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  listadoCategorias: Set<Categorias> = new Set<Categorias>() ;

  //convierto el set en array para unicamente la visualizacion
  categoriaArray: Categorias[] = [] ;
  constructor() {
    this.actualizarArray() ;
  }
  actualizarArray() {
    this.categoriaArray = Array.from(this.listadoCategorias) ;
  }

  agregarCategoria(categoria: Categorias) {
    this.listadoCategorias.add(categoria) ;
    this.actualizarArray() ;
  }

  eliminarCategoriaPorId ( id: number ) {
    let eliminar: Categorias | undefined ;

    this.listadoCategorias.forEach( element => {
      if ( element.id === id ) {
        eliminar = element ;
      }
    })

    if ( eliminar ) {
      this.listadoCategorias.delete(eliminar) ;
    }

    this.actualizarArray() ;
  }

  eliminarCategoriaPorNombre ( nombre: string ) {
    let eliminar: Categorias | undefined ;

    this.listadoCategorias.forEach( element => {
      if ( element.nombre === nombre ) {
        eliminar = element ;
      }
    })

    if ( eliminar ) {
      this.listadoCategorias.delete(eliminar) ;
    }

    this.actualizarArray() ;
  }

  buscarPorId ( id: number ) {
    let encontrado: Categorias | undefined ;

    this.listadoCategorias.forEach( element => {
      if ( element.id === id ) {
        encontrado = element ;
      }
    })

    return encontrado ;
  }

  buscarPorNombre ( nombre: string ) {
    let encontrado: Categorias | undefined ;

    this.listadoCategorias.forEach( element => {
      if ( element.nombre === nombre ) {
        encontrado = element ;
      }
    })

    return encontrado ;
  }

}
