import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ingreso } from 'app/ingreso/interfaces/ingreso.interface';
import { IngresoService } from 'app/ingreso/services/ingreso.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-listar-ingresos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-ingresos.component.html',
  styleUrl: './listar-ingresos.component.css',
})
export class ListarIngresosComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
    mail: '',
  };

  ingresoService = inject(IngresoService);
  listaIngresos: Ingreso[] = [];

  listarIngresos() {
    this.ingresoService.getIngresos().subscribe({
      next: (ingresos: Ingreso[]) => {
        this.listaIngresos = [...ingresos].reverse();
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.listarIngresos();
  }
}
