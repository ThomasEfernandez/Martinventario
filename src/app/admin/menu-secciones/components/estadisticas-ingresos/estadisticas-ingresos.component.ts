import { Component, inject, OnInit } from '@angular/core';
import { Ingreso } from 'app/ingreso/interfaces/ingreso.interface';
import { IngresoService } from 'app/ingreso/services/ingreso.service';

@Component({
  selector: 'app-estadisticas-ingresos',
  imports: [],
  templateUrl: './estadisticas-ingresos.component.html',
  styleUrl: './estadisticas-ingresos.component.css'
})
export class EstadisticasIngresosComponent implements OnInit{
  ngOnInit(): void {
    this.listarUltimos();
  }


  listaUltimosIngresos:Ingreso[]=[]

  ingresosService = inject(IngresoService);


listarUltimos (){
  let cantMotrar=3;
  this.ingresosService.getIngresos().subscribe({
    next:(ingresos:Ingreso[])=>{
      for(let i=0;i<cantMotrar;i++){
        let ultimo = ingresos[ingresos.length-(i+1)]
        this.listaUltimosIngresos.push(ultimo);
  }
    },error(e:Error){
      console.log(e.message);
      

    }
  })
}
}
