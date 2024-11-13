import { Producto } from './../../../producto/interfaces/producto.interface';
import { ProductoService } from './../../../producto/services/producto.service';
import { Venta } from './../../../venta/interfaces/venta.interface';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VentaService } from '../../../venta/services/venta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-realizar-venta-cajero',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './realizar-venta-cajero.component.html',
  styleUrl: './realizar-venta-cajero.component.css',
})
export class RealizarVentaCajeroComponent {
  @Output()
  producto:Producto|undefined={
    id: 0,
    nombreProducto: "",
    cantidad: 0,
    marca: "",
    proveedor:"" ,
    precioCompra: 0,
    precioVenta: 0,
    categoria: "",
  }
  c:number=0;
  asignarCantidadMax(){
    if(this.producto){
      this.c=this.producto.cantidad;
    }
  }
  emitirVenta: EventEmitter<Venta> = new EventEmitter();
  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [0, Validators.required],
    total: [0, Validators.required],
    fecha: [new Date(), Validators.required],
    cajero: [0, Validators.required],
    //productos: [[], Validators.required],
    producto:[{}, Validators.required],
    cantidad:[0,[Validators.required, Validators.min(1), Validators.max(this.c)]]
  });

  maximo:number=0;
  fecha = new Date();
  ventasService = inject(VentaService);
  prodService = inject(ProductoService);

  agregarVenta() {
    if (this.formulario.invalid) {
      return;
    }
    const venta = this.formulario.getRawValue();
    this.emitirVenta.emit(venta);
    this.agregarVentaService(venta);
  }

  agregarVentaService(venta: Venta) {
    this.ventasService.postVenta(venta).subscribe();
    // venta.productos.forEach((aux) => {
    //   this.modificarStock(aux.cantidad, aux.elProducto.id);
    // });
    this.modificarStock(venta.cantidad,venta.producto.id)
  }

  modificarStock(cantidad: number, id: number) {
    this.prodService.getProductoById(id).subscribe({
      next: (aux: Producto) => {
        aux.cantidad = aux.cantidad - cantidad;
        this.prodService.putProducto(aux.id, aux).subscribe({
          next: () => {},
          error(e: Error) {
            console.log(e.message);
          },
        });
      },
      error(e: Error) {
        console.log(e.message);
      },
    });
  }

  listaProductos:Producto[]=[]


  traerProductos(){
    this.prodService.getProductos().subscribe({next:(productos:Producto[])=>{
      productos.forEach(p => {if(p.cantidad>0){
        this.listaProductos.push(p)
      }})
    }})
  }

  ngOnInit(){
    this.traerProductos();
    document.getElementById('producto')?.addEventListener('click',()=>{
      const select=document.getElementById('producto') as HTMLSelectElement;
      const producto=this.listaProductos.find((p)=>p.nombreProducto===select.value)
      this.producto=producto
      console.log(this.producto?.cantidad);
      this.asignarCantidadMax()
    })

  }
}
