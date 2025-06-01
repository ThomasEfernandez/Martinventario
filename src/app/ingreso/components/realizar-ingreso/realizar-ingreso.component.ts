import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ingreso } from 'app/ingreso/interfaces/ingreso.interface';
import { IngresoService } from 'app/ingreso/services/ingreso.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
  selector: 'app-realizar-ingreso',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './realizar-ingreso.component.html',
  styleUrl: './realizar-ingreso.component.css',
})
export class RealizarIngresoComponent {
  @Input() tipo: string = '';

  ngOnInit() {
    this.listarProductos();

    document.getElementById('producto')?.addEventListener('click', () => {
      const select = document.getElementById('producto') as HTMLSelectElement;
      this.producto = this.listaProductos.find(
        (p) => p.nombreProducto === select.value
      );
    });
  }

  ingresoService = inject(IngresoService);
  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  ingresoRealizado: boolean = false;

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
    usuario: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  realizarIngreso() {
    if (this.formulario.valid) {
      const ingreso: Ingreso = this.formulario.getRawValue();
      if (this.producto) {
        this.productoService.getProductoById(this.producto.id).subscribe({
          next: (producto: Producto) => {
            this.ingresoService.getIngresos().subscribe({
              next: (i: Ingreso[]) => {
                ingreso.id = `${i.length + 1}`;
                ingreso.usuario = this.tipo;
                this.realizarIngresoService(ingreso);
                this.ingresoRealizado = true;
              },
            });
          },
        });
      }
    } else {
      console.log(this.formulario.value)
      this.formulario.markAllAsTouched();
    }
  }

  producto: Producto | undefined = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    categoria: '',
    etiqueta: '',
  };

  realizarIngresoService(ingreso: Ingreso) {
    this.ingresoService.postIngreso(ingreso).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
    const producto = this.listaProductos.find(
      (p) => p.nombreProducto === ingreso.producto
    );
    if (producto) {
      this.modificarStock(ingreso.cantidad, producto.id);
    }
  }

  modificarStock(cantidad: number, id: string | undefined) {
    this.productoService.getProductoById(id).subscribe({
      next: (p: Producto) => {
        p.cantidad = p.cantidad - cantidad;
        this.productoService.patchProducto(p.id, p).subscribe({
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
