import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { Egreso } from '../../interfaces/egreso.interface';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EgresoService } from '../../services/egreso.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-realizar-egreso-admin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './realizar-egreso-admin.component.html',
  styleUrl: './realizar-egreso-admin.component.css',
})
export class RealizarEgresoAdminComponent {
  @Output()
  emitirVenta: EventEmitter<Egreso> = new EventEmitter();

  egresoService = inject(EgresoService);
  prodService = inject(ProductoService);

  producto: Producto | undefined = {
    id: '',
    producto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    precioCompra: 0,
    precioVenta: 0,
    categoria: '',
  };

  listaProductos: Producto[] = [];
  listaMotivos: string[] = ['Venta', 'Perdida', 'Desgaste'];

  egresoRealizada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    /* total: [0], */
    fecha: [
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear(),
    ],
    /* cajero: [0, Validators.required], */
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    motivo: ['', [Validators.required]],
  });

  agregarEgreso() {
    if (this.formulario.valid) {
      const egresos = this.formulario.getRawValue();
      this.egresoService.getVenta().subscribe({
        next: (egreso: Egreso[]) => {
          egresos.id = `${egreso.length + 1}`;

          const produ = this.listaProductos.find(
            (p) => p.producto === egresos.producto
          );

          this.prodService.getProductoById(produ?.id).subscribe({
            next: (prod: Producto) => {
              console.log('entra');
              console.log('cantidad:' + egresos.cantidad);
              console.log('precio venta:' + prod.precioVenta);
              /* venta.total = venta.cantidad * prod.precioVenta;
              console.log('total:' + venta.total); */
              this.emitirVenta.emit(egresos);
              this.agregarEgresoService(egresos);
              this.egresoRealizada = true;
            },
            error: (err: Error) => {
              console.log(err.message);
            },
          });
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarEgresoService(venta: Egreso) {
    this.egresoService.postVenta(venta).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
    const producto = this.listaProductos.find(
      (p) => p.producto === venta.producto
    );
    if (producto) {
      this.modificarStock(venta.cantidad, producto.id);
    }
  }

  modificarStock(cantidad: number, id: string | undefined) {
    this.prodService.getProductoById(id).subscribe({
      next: (aux: Producto) => {
        aux.cantidad = aux.cantidad - cantidad;
        this.prodService.putProducto(aux.id, aux).subscribe({
          next: () => {},
          error(e: Error) {
            console.log(e.message);
          },
        });
      },
      error(e: Error) {
        console.log(e.message);
      },
    });
  }

  traerProductos() {
    this.prodService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        productos.forEach((p) => {
          if (p.cantidad > 0) {
            this.listaProductos.push(p);
          }
        });
      },
    });
  }

  ngOnInit() {
    this.traerProductos();
    document.getElementById('producto')?.addEventListener('click', () => {
      const select = document.getElementById('producto') as HTMLSelectElement;
      const producto = this.listaProductos.find(
        (p) => p.producto === select.value
      );
      this.producto = producto;
      if (this.producto) {
        this.formulario.controls['cantidad'].addValidators([
          Validators.max(this.producto.cantidad),
        ]);
      }
    });
  }
}
