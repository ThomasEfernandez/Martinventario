import { Component, inject } from '@angular/core';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-proveedores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css'],
})
export class ListarProveedorComponent {
  listaProveedores: Proveedor[] = [];
  proveedorService = inject(ProveedorService);

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
      },
      error: (err) => {
        console.error('Error al eliminar el proveedor', err);
      }
    });
  }
}
