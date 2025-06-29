import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pedido } from 'app/pedido/interfaces/pedido.interface';
import { PedidoService } from 'app/pedido/services/pedido.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';

@Component({
  selector: 'app-agregar-pedido',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-pedido.component.html',
  styleUrl: './agregar-pedido.component.css',
})
export class AgregarPedidoComponent {
  @Input() tipo: string | null = null;

  pedidoService = inject(PedidoService);
  proveedorService = inject(ProveedorService);
  productoService = inject(ProductoService);

  listaProveedores: Proveedor[] = [];
  listaProductos: Producto[] = [];

  razonSocial: string | undefined = '';

  pedidoAgregado: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    fecha: [
      new Date().getDate() +
        '/' +
        new Date().getMonth() +
        '/' +
        new Date().getFullYear(),
    ],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    proveedor: ['', Validators.required],
    estado: [false],
  });

  agregarPedido() {
    if (this.formulario.valid) {
      const pedido: Pedido = this.formulario.getRawValue();
      this.pedidoService.getPedidos().subscribe({
        next: (pedidos: Pedido[]) => {
          pedido.id = `${pedidos.length + 1}`;
/*           pedido.proveedor =  */
          this.agregarPedidoService(pedido);
          this.pedidoAgregado = true;
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarPedidoService(pedido: Pedido) {
    this.pedidoService.postPedido(pedido).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarProveedores() {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores: Proveedor[]) => {
        this.listaProveedores = proveedores;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.listarProveedores();
    this.listarProductos();
    document.getElementById('proveedor')?.addEventListener('click', () => {
      const select = document.getElementById('proveedor') as HTMLSelectElement;
      const proveedor = this.listaProveedores.find(
        (p) => p.razonSocial === select.value
      );
      this.razonSocial = proveedor?.razonSocial;
    });
  }

  listarProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
