
import { Productos } from '../interfaces/Productos.interface';
import { Component, EventEmitter, inject,Output } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';


@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,RouterModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

@Output()

emitirProducto: EventEmitter<Productos> = new EventEmitter();


producto:Productos={


  id:0,
  nombreProducto:'',
  codigo:0,
  marca:'',
  cantidad:0,
  precioVenta:0,
  precioCompra:0
}
fb = inject(FormBuilder);
productoService = inject (ProductoService)

formulario = this.fb.nonNullable.group(
  {
    nombreProducto: ['',Validators.required],
    marca: ['',Validators.required],
    precioCompra:['',Validators.required],
    precioVenta:['',Validators.required],
    cantidad:['',Validators.required]


  }
)

agregarProducto (){

  if (this.formulario.invalid) return;
  const producto = this.formulario.getRawValue();


  this.addProductoServer(this.producto);

  this.emitirProducto.emit(this.producto);


}

addProductoServer (producto:Productos){
this.productoService.postProducto(producto).subscribe()
}
}

