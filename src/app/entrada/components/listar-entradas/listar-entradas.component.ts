import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Entrada } from 'app/entrada/interfaces/entrada.interface';
import { EntradaService } from 'app/entrada/services/entrada.service';

@Component({
    selector: 'app-listar-entradas',
    imports: [RouterModule],
    templateUrl: './listar-entradas.component.html',
    styleUrl: './listar-entradas.component.css'
})
export class ListarEntradasComponent {
  @Input() tipo: string = '';

  entradaServices = inject(EntradaService);
  listaEntradas: Entrada[] = [];

  listarEntradas() {
    this.entradaServices.getEntradas().subscribe({
      next: (aux: Entrada[]) => {
        this.listaEntradas = aux;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.listarEntradas();
  }
}
