import { Component } from '@angular/core';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { Routes} from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';


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
}
,{
    path:'agregarProducto',
    component:AgregarProductoComponent
},{
    path:'modificarProducto',
    component: ModificarProductoComponent
},{

    path:'eliminarProducto',
    component: EliminarProductoComponent
},{
    path:'**',
    redirectTo:'',
    pathMatch:'full'
}
];




