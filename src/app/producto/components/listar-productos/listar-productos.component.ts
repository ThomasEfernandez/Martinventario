import { Component, inject, OnInit } from '@angular/core';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { AgregarProductoAdminComponent } from '../agregar-producto-admin/agregar-producto-admin.component';


@Component({
  selector: 'app-listar-productos',
  standalone: true,
  imports: [AgregarProductoAdminComponent],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent implements OnInit {
  ngOnInit(): void {
    this.cargarListaProd();
  }
  listaProductos: Producto[] = [];
  productoService = inject(ProductoService);

  listar(producto:Producto) {

    this.listaProductos.push(producto);
  }


  cargarListaProd (){
    this.productoService.getProductos().subscribe({
      next:(productos:Producto[])=>{

        this.listaProductos = productos;
        console.log("lista cargada");

        

      },error:(e:Error)=>{
        console.log(e.message);
        
      }
    })
  }
  

  
}
