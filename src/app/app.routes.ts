import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component';
import { AgregarProductoComponent } from './producto/components/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './producto/components/modificar-producto/modificar-producto.component';
import { EliminarProductoComponent } from './producto/components/eliminar-producto/eliminar-producto.component';
import { AgregarProveedorComponent } from './proveedor/components/agregar-proveedor/agregar-proveedor.component';
import { ProveedorMenuComponent } from './proveedor/components/proveedor-menu/proveedor-menu.component';

export const routes: Routes = [

  {
    path:'',
    component: IniciarSesionComponent
  },
  // {
  //   path:'',
  //   component: PaginaPrincipalComponent
  // },
  { path: 'proveedores',
    component: ProveedorMenuComponent
  },
  {
    path:'agregarProducto',
    component:AgregarProductoComponent
  },
  {
    path:'modificarProducto',
    component: ModificarProductoComponent
  },
  {
    path:'eliminarProducto',
    component: EliminarProductoComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }

];
