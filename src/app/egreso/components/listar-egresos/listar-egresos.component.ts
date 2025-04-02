import { RouterModule } from '@angular/router';
import { EgresoService } from './../../services/egreso.service';
import { Component, inject } from '@angular/core';
import { Egreso } from 'app/egreso/interfaces/egreso.interface';

@Component({
    selector: 'app-listar-egresos',
    imports: [RouterModule],
    templateUrl: './listar-egresos.component.html',
    styleUrl: './listar-egresos.component.css'
})
export class ListarEgresosComponent {
  egresoServicios = inject(EgresoService);
  listaEgreso: Egreso[] = [];

  traerEgresos() {
    this.egresoServicios.getVenta().subscribe({
      next: (aux: Egreso[]) => {
        this.listaEgreso = aux;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.traerEgresos();
  }
}
