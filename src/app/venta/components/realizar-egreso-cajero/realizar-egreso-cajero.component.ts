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

@Component({
  selector: 'app-realizar-egreso-cajero',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './realizar-egreso-cajero.component.html',
  styleUrl: './realizar-egreso-cajero.component.css',
})
export class RealizarEgresoCajeroComponent {
  @Output()
  emitirVenta: EventEmitter<Egreso> = new EventEmitter();

  ventasService = inject(EgresoService);
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

  ventaRealizada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    /* total: [0], */
    fecha: [
      new Date().getDate() +
        '/' +
        new Date().getMonth() +
        '/' +
        new Date().getFullYear(),
    ],
    /* cajero: [0, Validators.required], */
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    motivo: ['', [Validators.required]],
  });

  agregarVenta() {
    if (this.formulario.valid) {
      const venta = this.formulario.getRawValue();
      this.ventasService.getVenta().subscribe({
        next: (ventas: Egreso[]) => {
          venta.id = `${ventas.length + 1}`;

          const produ = this.listaProductos.find(
            (p) => p.producto === venta.producto
          );

          this.prodService.getProductoById(produ?.id).subscribe({
            next: (prod: Producto) => {
              console.log('entra');
              console.log('cantidad:' + venta.cantidad);
              console.log('precio venta:' + prod.precioVenta);
              /* venta.total = venta.cantidad * prod.precioVenta;
              console.log('total:' + venta.total); */
              this.emitirVenta.emit(venta);
              this.agregarVentaService(venta);
              this.ventaRealizada = true;
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

  agregarVentaService(venta: Egreso) {
    this.ventasService.postVenta(venta).subscribe({
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
