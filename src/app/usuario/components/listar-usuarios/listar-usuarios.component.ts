import { Component, inject, Input, OnInit } from '@angular/core';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css',
})
export class ListarUsuariosComponent implements OnInit {
  ngOnInit(): void {
   this.listarUsuarios();
  }
  @Input() tipo: string = 'admin';

  usuarioService = inject(UsuarioService);
  
  listaUsuarios: Usuario[]=[]



  listarUsuarios (){

    this.usuarioService.getUsuarios().subscribe({
      next:(usuarios:Usuario[])=>{
        this.listaUsuarios = usuarios;
      },
      error: (e:Error)=>{
        console.log(e.message);
        
      }
    })
  }


}
