import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compra } from 'app/compra/interfaces/compra.interface';
import { CompraService } from 'app/compra/services/compra.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
  selector: 'app-agregar-compra',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-compra.component.html',
  styleUrl: './agregar-compra.component.css',
})
export class AgregarCompraComponent {
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

  compraService = inject(CompraService);
  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  compraAgregada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    proveedor: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    precioUnitario: [0, [Validators.required, Validators.min(1)]],
    totalCompra: [0],
  });

  agregarCompra() {
    if (this.formulario.valid) {
      const compra: Compra = this.formulario.getRawValue();
      if (this.pp) {
        this.productoService.getProductoById(this.pp.id).subscribe({
          next: (producto: Producto) => {
            this.compraService.getCompras().subscribe({
              next: (cs: Compra[]) => {
                compra.id = `${cs.length + 1}`;
                if (this.pp) {
                  compra.proveedor = this.pp.proveedor;
                }
                compra.totalCompra = compra.cantidad * compra.precioUnitario;
                this.agregarCompraService(compra);
                this.actualizarCantidadService(producto, compra.cantidad);
                this.compraAgregada = true;
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
    precioCompra: 0,
    precioVenta: 0,
    categoria: '',
    etiqueta: '',
  };

  agregarCompraService(compra: Compra) {
    this.compraService.postCompra(compra).subscribe({
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
