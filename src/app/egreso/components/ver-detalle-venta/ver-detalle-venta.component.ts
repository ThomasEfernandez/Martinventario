import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Egreso } from 'app/egreso/interfaces/egreso.interface';
import { EgresoService } from 'app/egreso/services/egreso.service';

@Component({
    selector: 'app-ver-detalle-venta',
    imports: [],
    templateUrl: './ver-detalle-venta.component.html',
    styleUrl: './ver-detalle-venta.component.css'
})
export class VerDetalleVentaComponent {
  serviciosVenta = inject(EgresoService);
  venta: Egreso | undefined = {
    id: '',
    total: 0,
    fecha: '',
    cajero: 0,
    producto: '',
    cantidad: 0,
  };
  router = inject(ActivatedRoute);
  id: string | null = '';

  traerVenta(id: string | null) {
    this.serviciosVenta.getVentaById(id).subscribe({
      next: (aux: Egreso) => {
        this.venta = aux;
        error: (e: Error) => {
          console.log(e.message);
        };
      },
    });
  }

  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.traerVenta(this.id);
    });
  }
}
