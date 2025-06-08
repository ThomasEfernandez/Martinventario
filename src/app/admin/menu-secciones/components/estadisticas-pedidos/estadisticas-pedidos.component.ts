import { Component, inject, OnInit } from '@angular/core';
import { Pedido } from 'app/pedido/interfaces/pedido.interface';
import { PedidoService } from 'app/pedido/services/pedido.service';

@Component({
  selector: 'app-estadisticas-pedidos',
  imports: [],
  templateUrl: './estadisticas-pedidos.component.html',
  styleUrl: './estadisticas-pedidos.component.css'
})
export class EstadisticasPedidosComponent implements OnInit{
ngOnInit(): void {
  this.listarUltimos();
}

pedidosService = inject(PedidoService)
listarUltimosPedidos:Pedido[]=[]


listarUltimos (){
  let cantMotrar=1;
  this.pedidosService.getPedidos().subscribe({
    next:(pedidos:Pedido[])=>{
      for(let i=0;i<cantMotrar;i++){
        let ultimo = pedidos[pedidos.length-(i+1)]
        this.listarUltimosPedidos.push(ultimo);
  }
    },error(e:Error){
      console.log(e.message);
      

    }
  })
}
}
