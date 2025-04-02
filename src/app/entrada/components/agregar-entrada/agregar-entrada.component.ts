import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Entrada } from 'app/entrada/interfaces/entrada.interface';
import { EntradaService } from 'app/entrada/services/entrada.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
    selector: 'app-agregar-entrada',
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './agregar-entrada.component.html',
    styleUrl: './agregar-entrada.component.css'
})
export class AgregarEntradaComponent {
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

  entradaService = inject(EntradaService);
  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  entradaAgregada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    proveedor: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    precioUnitario: [0, [Validators.required, Validators.min(1)]],
    totalCompra: [0],
  });

  agregarEntrada() {
    if (this.formulario.valid) {
      const entrada: Entrada = this.formulario.getRawValue();
      if (this.pp) {
        this.productoService.getProductoById(this.pp.id).subscribe({
          next: (producto: Producto) => {
            this.entradaService.getEntradas().subscribe({
              next: (cs: Entrada[]) => {
                entrada.id = `${cs.length + 1}`;
                if (this.pp) {
                  entrada.proveedor = this.pp.proveedor;
                }
                entrada.totalCompra = entrada.cantidad * entrada.precioUnitario;
                this.agregarEntradaService(entrada);
                this.actualizarCantidadService(producto, entrada.cantidad);
                this.entradaAgregada = true;
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
    // precioCompra: 0,
    // precioVenta: 0,
    categoria: '',
    etiqueta: '',
  };

  agregarEntradaService(entrada: Entrada) {
    this.entradaService.postEntrada(entrada).subscribe({
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
