import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';

@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css',
})
export class AgregarProveedorComponent {
  @Input() tipo: string | null = null;

  proveedorService = inject(ProveedorService);

  proveedorAgregado: boolean = false;

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
      this.proveedorService.getProveedores().subscribe({
        next: (proveedores: Proveedor[]) => {
          proveedor.id = `${proveedores.length + 1}`;
          this.agregarProveedorService(proveedor);
          this.proveedorAgregado = true;
        },
      });
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
}
