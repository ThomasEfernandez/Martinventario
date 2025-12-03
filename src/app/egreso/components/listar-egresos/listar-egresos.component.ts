import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Egreso } from 'app/egreso/interfaces/egreso.interface';
import { EgresoService } from './../../services/egreso.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-listar-egresos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-egresos.component.html',
  styleUrl: './listar-egresos.component.css',
})
export class ListarEgresosComponent {
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

  egresoService = inject(EgresoService);
  listaEgresos: Egreso[] = [];

  //Filtrado de Productos, variables de busqueda
  egresosFiltrados: Egreso[] = [];
  textoBusqueda: string = '';

  listarEgresos() {
    this.egresoService.getEgreso().subscribe({
      next: (egresos: Egreso[]) => {
        this.listaEgresos = [...egresos].reverse();
        this.egresosFiltrados = this.listaEgresos;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.listarEgresos();
  }

  /*Filtro por texto*/
  onBusquedaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.textoBusqueda = input.value;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.egresosFiltrados = this.listaEgresos.filter((egreso) => {

      const cumpleTexto =
        !this.textoBusqueda ||
        egreso.producto
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase()) ||
        egreso.id.toString().includes(this.textoBusqueda);

      return cumpleTexto;
    });
  }
}
