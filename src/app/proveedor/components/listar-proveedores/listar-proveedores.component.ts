import { Component, inject, Input } from '@angular/core';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-listar-proveedores',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css'],
})
export class ListarProveedorComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  listaProveedores: Proveedor[] = [];
  proveedorService = inject(ProveedorService);
  mensajeExito: string | null = null;

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

  eliminarProveedor(id: string) {
    this.proveedorService.deleteProveedor(id).subscribe({
      next: () => {
        this.listar();
        this.mensajeExito = "Se ha eliminado correctamente. "

        setTimeout(() => {
          this.mensajeExito = null;
        }, 3000);
      },
      error: (err) => {
        console.error('Error al eliminar el proveedor', err);
      },
    });

  }
}
