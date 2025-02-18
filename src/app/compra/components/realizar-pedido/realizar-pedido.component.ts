import { PedidoService } from '../../services/pedido.service';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pedido } from '../../interfaces/pedido.interface';

@Component({
  selector: 'app-realizar-pedido',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './realizar-pedido.component.html',
  styleUrl: './realizar-pedido.component.css',
})
export class RealizarPedidoComponent implements OnInit {
  ngOnInit(): void {
    this.realizarCompra();
  }

  @Output()
  emitirPedido: EventEmitter<Pedido> = new EventEmitter();

  fb = inject(FormBuilder);

  pedidoService = inject(PedidoService);

  formulario = this.fb.nonNullable.group({
    id: [''],
    idProducto: ['', [Validators.required]],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    proveedor: [''],
    totalCompra: [0],
  });

  productoService = inject(ProductoService);

  realizarCompra() {
    if (this.formulario.invalid) return;
    const pedido: Pedido = this.formulario.getRawValue();
    this.productoService.getProductoById(pedido.idProducto).subscribe({
      next: (producto: Producto) => {
        this.pedidoService.getPedidos().subscribe({
          next: (ps: Pedido[]) => {
            pedido.id = `${ps.length + 1}`;
            pedido.proveedor = producto.proveedor;
            pedido.totalCompra = pedido.cantidad * producto.precioCompra;
            this.emitirPedido.emit(pedido);
            this.agregarPedidoService(pedido);

            this.actualizarCantidadService(producto, pedido.cantidad);
            console.log(pedido);
          },
        });
      },
    });
  }

  agregarPedidoService(pedido: Pedido) {
    this.pedidoService.postPedido(pedido).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
  actualizarCantidadService(producto: Producto, cantidad: number) {
    this.productoService.getProductoById(producto.id).subscribe({
      next: (p: Producto) => {
        p.cantidad = p.cantidad + cantidad;
        this.productoService.patchProducto(p.id, p).subscribe({
          error: (error: Error) => {
            console.log(error.message);
          },
        });
      },
    });
  }
}
