import { Component, OnInit, inject } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { Proveedor } from '../../interfaces/proveedor-interface';
import { NavbarComponent } from "../../../nav/components/navbar/navbar.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-proveedores',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule],
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedorComponent implements OnInit {
  proveedores: Proveedor[] = [];

  proveedorService = inject(ProveedorService);

  ngOnInit() {
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.proveedorService.obtenerProveedores().subscribe(
      (data: Proveedor[]) => {
        this.proveedores = data;
      },
      error => {
        console.error('Error al obtener proveedores:', error);
      }
    );
  }
}
