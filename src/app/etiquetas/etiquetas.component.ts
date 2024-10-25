import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Etiquetas } from '../interfaces/Etiquetas.interface';

@Component({
  selector: 'app-etiquetas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './etiquetas.component.html',
  styleUrl: './etiquetas.component.css'
})
export class EtiquetasComponent {
  menuActivo: boolean = false ;
  listadoEtiquetas: Set<Etiquetas> = new Set<Etiquetas>() ;

  //convierto el set en array para unicamente la visualizacion
  categoriaArray: Etiquetas[] = [] ;
  constructor() {
    this.actualizarArray() ;
  }
  actualizarArray() {
    this.categoriaArray = Array.from(this.listadoEtiquetas) ;
  }

  //Alterar estado menu
  estadoMenu() {
    this.menuActivo = !this.menuActivo ;
  }


  agregarEtiqueta(categoria: Etiquetas) {
    this.listadoEtiquetas.add(categoria) ;
    this.actualizarArray() ;
  }

  eliminarEtiquetaPorId ( id: number ) {
    let eliminar: Etiquetas | undefined ;

    this.listadoEtiquetas.forEach( element => {
      if ( element.id === id ) {
        eliminar = element ;
      }
    })

    if ( eliminar ) {
      this.listadoEtiquetas.delete(eliminar) ;
    }

    this.actualizarArray() ;
  }

  buscarPorId ( id: number ) {
    let encontrado: Etiquetas | undefined ;

    this.listadoEtiquetas.forEach( element => {
      if ( element.id === id ) {
        encontrado = element ;
      }
    })

    return encontrado ;
  }

}

