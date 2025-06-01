import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Egreso } from 'app/egreso/interfaces/egreso.interface';
import { EgresoService } from './../../services/egreso.service';

@Component({
  selector: 'app-listar-egresos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-egresos.component.html',
  styleUrl: './listar-egresos.component.css',
})
export class ListarEgresosComponent {
  @Input() tipo: string = '';

  egresoService = inject(EgresoService);
  listaEgresos: Egreso[] = [];

  traerEgresos() {
    this.egresoService.getEgreso().subscribe({
      next: (egresos: Egreso[]) => {
        this.listaEgresos = [...egresos].reverse();
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
