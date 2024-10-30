import { CompraService } from './../../services/compra.service';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Compra } from '../../interfaces/compra';

@Component({
  selector: 'app-realizar-pedido',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './realizar-pedido.component.html',
  styleUrl: './realizar-pedido.component.css'
})
export class RealizarPedidoComponent {
  @Output()
fb = inject(FormBuilder)
eventEmiter:EventEmitter<Compra> = new EventEmitter()
formulario = this.fb.nonNullable.group({

  id:[0,[Validators.required]],
  cantidad:[0,[Validators.required,Validators.min(1)]]

})
productoService = inject (ProductoService)
compraService = inject (CompraService)

compra:Compra = {
  id:0,
  proveedor:"",
  idProducto:0,
  cantidad:1,
  totalCompra:0
}

realizarCompra (){

    if (this.formulario.invalid) return
     const id = this.formulario.getRawValue().id
    this.productoService.getProductoById(id).subscribe(

      {
        next:(prod:Producto)=>{

   
          
             this.compra.idProducto = prod.id
            this.compra.proveedor = prod.proveedor
            this.compra.totalCompra = (prod.precioCompra)*(this.formulario.getRawValue().cantidad);

        },
        error:(error:Error)=>{
          console.log(error);
          
        }
      });
     
}
agregarCompraService (){
      this.compraService.postCompra({...this.compra}).subscribe()
      this.eventEmiter.emit (this.compra)
}

}
   

    











