import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/proveedor-interface';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css'],
})
export class AgregarProveedorComponent {
  @Output()
  emitirProveedor: EventEmitter<Proveedor> = new EventEmitter();

  fb = inject(FormBuilder);
  proveedorService = inject(ProveedorService);

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    razonSocial: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cuit: ['', Validators.required],
  });

  agregarProveedor() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const proveedor = this.formulario.getRawValue();
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores: Proveedor[]) => {
        proveedor.id = proveedores.length + 1;
        this.emitirProveedor.emit(proveedor);
        this.agregarProveedorService(proveedor);
      },
    });
  }

  agregarProveedorService(proveedor: Proveedor) {
    this.proveedorService.postProveedor(proveedor).subscribe(
      (response) => console.log('Proveedor agregado:', response),
      (error) => console.error('Error al agregar proveedor:', error)
    );
  }
}
