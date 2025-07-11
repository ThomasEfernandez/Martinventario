import { Component, inject, Input } from '@angular/core';
import { Pedido } from '../../interfaces/pedido.interface';
import { PedidoService } from '../../services/pedido.service';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pedidos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-pedidos.component.html',
  styleUrl: './listar-pedidos.component.css',
})
export class ListarPedidosComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
  };

  pedidoService = inject(PedidoService);

  listaPedidos: Pedido[] = [];

  ped: Pedido | undefined = {
    id: '',
    fecha: '',
    producto: '',
    cantidad: 0,
    proveedor: '',
    estado: false,
  };

  listarPedidosService() {
    this.pedidoService.getPedidos().subscribe({
      next: (pedidos: Pedido[]) => {
        this.listaPedidos = [...pedidos].reverse();
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  pedidoRealizado(id: string | undefined) {
    const encontrado = this.listaPedidos.find((e) => e.id === id);
    this.ped = encontrado;
    if (this.ped) {
      this.ped.estado = true;
      this.pedidoService.putPedido(this.ped.id, this.ped).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }

  /* pedidoNoRealizado(id: string | undefined) {
    const encontrado = this.listaPedidos.find((e) => e.id === id);
    this.ped = encontrado;
    if (this.ped) {
      this.ped.estado = false;
      this.pedidoService.putPedido(this.ped.id, this.ped).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  } */

  ngOnInit(): void {
    this.listarPedidosService();
  }
}
