import { Component, inject, OnInit } from '@angular/core';
import { Egreso } from 'app/egreso/interfaces/egreso.interface';
import { EgresoService } from 'app/egreso/services/egreso.service';

@Component({
  selector: 'app-estadisticas-egresos',
  imports: [],
  templateUrl: './estadisticas-egresos.component.html',
  styleUrl: './estadisticas-egresos.component.css'
})
export class EstadisticasEgresosComponent  implements OnInit{
  ngOnInit(): void {
    this.listarUltimos()
  }
  listaUltimosEgresos:Egreso[]=[]
  egresosService = inject(EgresoService);

listarUltimos (){
  let cantMotrar=1;
  this.egresosService.getEgreso().subscribe({
    next:(egresos:Egreso[])=>{
      for(let i=0;i<cantMotrar;i++){
        let ultimo = egresos[egresos.length-(i+1)]
        this.listaUltimosEgresos.push(ultimo);
  }
  
    },error(e:Error){
      console.log(e.message);
      

    }
  })
}
}
