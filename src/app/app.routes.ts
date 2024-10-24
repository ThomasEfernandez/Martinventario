import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { CategoriasComponent } from './categorias/categorias.component';


export const routes: Routes = [


{
    path:'', component: PaginaPrincipalComponent
},{
    path:'productos',
    component:ProductosComponent
},{
    path:'proveedores',
    component:ProveedoresComponent
},{
    path:'categorias',
    component:CategoriasComponent
},{
    path:'**',
    redirectTo:'',
    pathMatch:'full'
}
];




