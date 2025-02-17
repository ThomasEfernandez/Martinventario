import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Egreso } from 'app/venta/interfaces/egreso.interface';
import { EgresoService } from 'app/venta/services/egreso.service';

@Component({
  selector: 'app-listar-egresos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-egresos.component.html',
  styleUrl: './listar-egresos.component.css',
})
export class ListarEgresosComponent {
  ventaServicios = inject(EgresoService);
  listaVentas: Egreso[] = [];

  traerVentas() {
    this.ventaServicios.getVenta().subscribe({
      next: (aux: Egreso[]) => {
        this.listaVentas = aux;

        error: (e: Error) => {
          console.log(e.message);
        };
      },
    });
  }

  ngOnInit() {
    this.traerVentas();
  }
}
