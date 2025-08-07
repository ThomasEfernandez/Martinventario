import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-etiqueta',
  imports: [RouterModule],
  templateUrl: './menu-etiqueta.component.html',
  styleUrl: './menu-etiqueta.component.css',
})
export class MenuEtiquetaComponent {
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
}
