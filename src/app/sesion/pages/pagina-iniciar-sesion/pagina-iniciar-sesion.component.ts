import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { IniciarSesionComponent } from '../../components/iniciar-sesion/iniciar-sesion.component';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-pagina-iniciar-sesion',
  standalone: true,
  imports: [NavbarComponent, IniciarSesionComponent],
  templateUrl: './pagina-iniciar-sesion.component.html',
  styleUrl: './pagina-iniciar-sesion.component.css',
})
export class PaginaIniciarSesionComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  ngOnInit() {
    console.log("PAGINA INICIAR SESION", this.user)
  }
}
