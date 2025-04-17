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
      this.pp = this.listaProductos.find(
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
    proveedor: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  realizarIngreso() {
    if (this.formulario.valid) {
      const ingreso: Ingreso = this.formulario.getRawValue();
      if (this.pp) {
        this.productoService.getProductoById(this.pp.id).subscribe({
          next: (producto: Producto) => {
            this.ingresoService.getIngresos().subscribe({
              next: (cs: Ingreso[]) => {
                ingreso.id = `${cs.length + 1}`;
                if (this.pp) {
                  ingreso.proveedor = this.pp.proveedor;
                }
                this.realizarIngresoService(ingreso);
                this.actualizarCantidadService(producto, ingreso.cantidad);
                this.ingresoRealizado = true;
              },
            });
          },
        });
      }
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  pp: Producto | undefined = {
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
  }

  actualizarCantidadService(producto: Producto, cantidad: number) {
    console.log(producto.id);
    this.productoService.getProductoById(producto.id).subscribe({
      next: (p: Producto) => {
        p.cantidad = p.cantidad + cantidad;
        this.productoService.patchProducto(p.id, p).subscribe({
          error: (err: Error) => {
            console.log(err.message);
          },
        });
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
