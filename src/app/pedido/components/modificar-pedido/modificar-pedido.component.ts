import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pedido } from 'app/pedido/interfaces/pedido.interface';
import { PedidoService } from 'app/pedido/services/pedido.service';

@Component({
  selector: 'app-modificar-pedido',
  imports: [RouterModule, CommonModule],
  templateUrl: './modificar-pedido.component.html',
  styleUrl: './modificar-pedido.component.css',
})
export class ModificarPedidoComponent {
  @Input() tipo: string | null = null;

  pedidoService = inject(PedidoService);

  router = inject(Router);

  id: string | null = null;
  activaredRoutes = inject(ActivatedRoute);

  pedidos: Pedido[] = [];
  pedidoSeleccionado: Pedido | null = null;
  nuevaCantidad: number = 1;

  ngOnInit() {
    this.cargarPedidos();
  }

  cargarPedidos() {
    this.pedidoService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    });
  }
  seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = { ...pedido };
    this.nuevaCantidad = 1;
  }

  modificarCantidad() {
    if (!this.pedidoSeleccionado || this.nuevaCantidad < 1) {
      alert('La cantidad debe ser mayor a 0');
      return;
    }

    /* const patchData = { cantidad: this.nuevaCantidad }; */

    const pedidoModificado: Pedido = {
      ...this.pedidoSeleccionado,
      cantidad: this.nuevaCantidad,
    };

    this.pedidoService
      .patchPedido(this.pedidoSeleccionado.id, pedidoModificado)
      .subscribe({
        next: () => {
          alert('Cantidad modificada correctamente');
          this.pedidoSeleccionado = null;
          this.cargarPedidos();
        },
        error: () => alert('Error al modificar cantidad'),
      });
  }
}
