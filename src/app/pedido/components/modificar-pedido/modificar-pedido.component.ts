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

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    fecha: [
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear(),
    ],
    producto: [''],
    cantidad: [0],
    razonSocialProveedor: [''],
    estado: [false],
  });

  pedidos: Pedido[] = [];
  pedidoSeleccionado: Pedido | null = null;
  nuevaCantidad: number = 1;

  pedidoModificado: boolean = false;

  getPedidoById(id: string | null) {
    this.pedidoService.getPedidosById(id).subscribe({
      next: (pedido: Pedido) => {
        this.formulario.controls['id'].setValue(pedido.id);
        this.formulario.controls['producto'].setValue(pedido.producto);
        this.formulario.controls['cantidad'].setValue(pedido.cantidad);
        this.formulario.controls['razonSocialProveedor'].setValue(
          pedido.razonSocialProveedor
        );
        this.formulario.controls['estado'].setValue(pedido.estado);
      },
      error: () => {
        console.log('error....');
      },
    });
  }

  update() {
    if (this.formulario.invalid) return;

    const pedido = this.formulario.getRawValue();

    this.pedidoService.putPedido(this.id, pedido).subscribe({
      next: () => {
        console.log('Actualizado');
        this.pedidoModificado = true;
      },
    });
  }

  ngOnInit() {
    this.activaredRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getPedidoById(this.id);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
    /* this.cargarPedidos(); */
  }

  /* cargarPedidos() {
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

    const patchData = { cantidad: this.nuevaCantidad };

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
  } */
}
