import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Venta } from 'app/venta/interfaces/venta.interface';
import { VentaService } from 'app/venta/services/venta.service';

@Component({
  selector: 'app-listar-ventas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-ventas.component.html',
  styleUrl: './listar-ventas.component.css',
})
export class ListarVentasComponent {
  ventaServicios = inject(VentaService);
  listaVentas: Venta[] = [];

  traerVentas() {
    this.ventaServicios.getVenta().subscribe({
      next: (aux: Venta[]) => {
        this.listaVentas = aux;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.traerVentas();
  }
}
