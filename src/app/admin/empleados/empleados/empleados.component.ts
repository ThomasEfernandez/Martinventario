import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from "../../../usuario/components/listar-usuarios/listar-usuarios.component";
@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ListarUsuariosComponent,RouterModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  
}
