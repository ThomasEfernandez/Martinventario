import { Component, EventEmitter, inject,Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/proveedor-interface';
import { NavbarComponent } from "../../../nav/components/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-agregar-proveedor',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-proveedor.component.html',
  styleUrl: './agregar-proveedor.component.css'
})

export class AgregarProveedorComponent {

  @Output()
  emitirProveedor: EventEmitter<Proveedor> = new EventEmitter();

  proveedor:Proveedor = {
    nombre: '',
    apellido: '',
    razonSocial: '',
    email: '',
    cuit: ''
  }

  fb = inject(FormBuilder);

  proveedorService = inject (ProveedorService);

  formulario = this.fb.nonNullable.group(
    {
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      razonSocial: ['', Validators.required],
      email: ['',Validators.required, Validators.email],
      cuit: ['',Validators.required]
    }
  )

  agregarProveedor() {
    if (this.formulario.invalid) return;
    const proveedor = this.formulario.getRawValue();
    this.agregarProveedorService(this.proveedor);
    this.emitirProveedor.emit(this.proveedor);
  }

  agregarProveedorService(producto: Proveedor) {
    this.proveedorService.agregarProveedor(producto).subscribe();
  }
}
