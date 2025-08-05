import { Component, Input } from '@angular/core';
import { NavbarComponent } from 'app/nav/components/navbar/navbar.component';
import { RecuperarContrasenaComponent } from 'app/sesion/components/recuperar-contrasena/recuperar-contrasena.component';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-pagina-recuperar-contrasena',
  standalone: true,
  imports: [NavbarComponent, RecuperarContrasenaComponent],
  templateUrl: './pagina-recuperar-contrasena.component.html',
  styleUrl: './pagina-recuperar-contrasena.component.css',
})
export class PaginaRecuperarContrasenaComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
    mail: '',
  };

  ngOnInit() {
    console.log('PAGINA RECUPERAR CONTRASEÑA', this.user);
  }
}
