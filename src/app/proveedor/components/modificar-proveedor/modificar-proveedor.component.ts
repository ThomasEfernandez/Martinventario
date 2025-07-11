import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-modificar-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './modificar-proveedor.component.html',
  styleUrl: './modificar-proveedor.component.css',
})
export class ModificarProveedorComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
  };

  proveedorService = inject(ProveedorService);

  proveedorAgregado: boolean = false;

  router = inject(Router);

  id: string | null = null;
  activaredRoutes = inject(ActivatedRoute);

  mensajeExito = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    razonSocial: ['', Validators.required],
    cuit: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  getTareaById(id: string | null) {
    this.proveedorService.getProveedorById(id).subscribe({
      next: (proveedor: Proveedor) => {
        this.formulario.controls['id'].setValue(proveedor.id);
        this.formulario.controls['nombre'].setValue(proveedor.nombre);
        this.formulario.controls['apellido'].setValue(proveedor.apellido);
        this.formulario.controls['razonSocial'].setValue(proveedor.razonSocial);
        this.formulario.controls['cuit'].setValue(proveedor.cuit);
        this.formulario.controls['email'].setValue(proveedor.email);
      },
      error: () => {
        console.log('error....');
      },
    });
  }

  update() {
    if (this.formulario.invalid) return;
    const proveedor = this.formulario.getRawValue();
    this.proveedorService.putProducto(this.id, proveedor).subscribe({
      next: () => {
        this.mensajeExito = true;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit(): void {
    this.activaredRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getTareaById(this.id);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
