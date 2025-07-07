import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from 'app/usuario/services/usuario.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
@Component({
  selector: 'app-estadisticas-empleados',
  imports: [],
  templateUrl: './estadisticas-empleados.component.html',
  styleUrl: './estadisticas-empleados.component.css'
})
export class EstadisticasEmpleadosComponent implements OnInit{
  ngOnInit(): void {
  this.contarEmpleados();
 
  
    
  }

  

  empleadosService = inject(UsuarioService);
  cantEmpleados:number=0;
  cantAdmin:number=0;

  contarEmpleados(){
    this.empleadosService.getUsuarios().subscribe({
      next:(usuarios:Usuario[])=>{

        usuarios.forEach(us => {
          if (us.tipo==='base'){
            this.cantEmpleados++;
          }else{
            this.cantAdmin++;
          }
          
        });

      },
      error:(e:Error)=>{
        console.log(e.message);
        

      }
      
    });

  }

}
