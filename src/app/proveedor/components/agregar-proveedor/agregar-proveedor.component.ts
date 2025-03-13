import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';

@Component({
    selector: 'app-agregar-proveedor',
    imports: [ReactiveFormsModule, RouterModule],
    templateUrl: './agregar-proveedor.component.html',
    styleUrl: './agregar-proveedor.component.css'
})
export class AgregarProveedorComponent {
  @Input() tipo: string | null = null;

  listaProveedores: Proveedor[] = [];
  proveedorService = inject(ProveedorService);

  proveedorAgregado: boolean = false;
  proveedorRepetido: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    razonSocial: ['', Validators.required],
    cuit: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  agregarProveedor() {
    if (this.formulario.valid) {
      const proveedor = this.formulario.getRawValue();

      this.listaProveedores.forEach((p) => {
        if (p.cuit === proveedor.cuit) {
          this.proveedorRepetido = true;
        }
      });

      if (this.proveedorRepetido === false) {
        this.proveedorService.getProveedores().subscribe({
          next: (proveedores: Proveedor[]) => {
            proveedor.id = `${proveedores.length + 1}`;
            this.agregarProveedorService(proveedor);
            this.proveedorAgregado = true;
          },
        });
      }
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarProveedorService(proveedor: Proveedor) {
    this.proveedorService.postProveedor(proveedor).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listar() {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores: Proveedor[]) => {
        this.listaProveedores = proveedores;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit() {
    this.listar();
  }
}
