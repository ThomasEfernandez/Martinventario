import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Etiqueta } from '../../interfaces/etiqueta.interface';
import { EtiquetaService } from '../../services/etiqueta.service';

@Component({
  selector: 'app-listar-etiquetas',
  standalone: true,
  imports: [],
  templateUrl: './listar-etiquetas.component.html',
  styleUrl: './listar-etiquetas.component.css'
})
export class ListarEtiquetasComponent {
  router = inject(Router) ;
  listaEtiquetas: Etiqueta[] = [] ;
  etiquetaService = inject(EtiquetaService) ;

  ngOnInit(): void{
    this.listar() ;
  }

  listar() {
    this.etiquetaService.getEtiquetas().subscribe(
      {
        next: (etiqueta: Etiqueta[] ) => {
          this.listaEtiquetas = etiqueta ;
        } ,
        error: (err: Error) => {
          console.log(err.message) ;
        }
      }
    )
  }
}
