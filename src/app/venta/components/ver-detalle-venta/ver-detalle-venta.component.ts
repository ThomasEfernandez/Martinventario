import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venta } from 'app/venta/interfaces/venta.interface';
import { VentaService } from 'app/venta/services/venta.service';

@Component({
  selector: 'app-ver-detalle-venta',
  standalone: true,
  imports: [],
  templateUrl: './ver-detalle-venta.component.html',
  styleUrl: './ver-detalle-venta.component.css'
})
export class VerDetalleVentaComponent {
serviciosVenta=inject(VentaService)
venta:Venta|undefined={
  id:"",
  total:0,
  fecha:"",
  cajero:0,
  producto:"",
  cantidad:0
}
router=inject(ActivatedRoute)
id: string | null = '';

traerVenta(id: string | null){
  this.serviciosVenta.getVentaById(id).subscribe({next:(aux:Venta)=>{
    this.venta=aux;
    error:(e:Error)=>{
      console.log(e.message);
    }
  }})
}

ngOnInit(){
  this.router.paramMap.subscribe((params) => {
    this.id = params.get('id');
     this.traerVenta(this.id);
  })
}
}
