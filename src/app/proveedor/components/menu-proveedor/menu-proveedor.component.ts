import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu-proveedor',
    imports: [RouterModule],
    templateUrl: './menu-proveedor.component.html',
    styleUrl: './menu-proveedor.component.css'
})
export class MenuProveedorComponent {
  @Input() tipo: string = '';
}
