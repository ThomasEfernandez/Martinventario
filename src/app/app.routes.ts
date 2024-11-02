import { PaginaAgregarProductoComponent } from './producto/pages/pagina-agregar-producto/pagina-agregar-producto.component';
import { Routes } from '@angular/router';
import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';
import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';
import { PaginaCategoriasComponent } from './categoria/pages/pagina-categorias/pagina-categorias.component';
import { PaginaAgregarCategoriaComponent } from './categoria/pages/pagina-agregar-categoria/pagina-agregar-categoria.component';
import { PaginaPrincipalAdminComponent } from './admin/pages/pagina-principal-admin/pagina-principal-admin.component';
import { PaginaProductosComponent } from './producto/pages/pagina-productos/pagina-productos.component';
import { PaginaProveedoresComponent } from './proveedor/pages/pagina-proveedores/pagina-proveedores.component';
import { PaginaAgregarProveedorComponent } from './proveedor/pages/pagina-agregar-proveedor/pagina-agregar-proveedor.component';
import { PaginaCajeroComponent } from './cajero/pages/pagina-cajero/pagina-cajero.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  {
    path: 'admin',
    component: PaginaPrincipalAdminComponent,
  },{
    path:'cajeros',
    component:PaginaCajeroComponent,
  },
  {
    path: 'productos',
    component: PaginaProductosComponent,
  },
  {
    path: 'agregar-producto',
    component: PaginaAgregarProductoComponent,
  },
  {
    path: 'categorias',
    component: PaginaCategoriasComponent,
  },
  {
    path: 'agregar-categoria',
    component: PaginaAgregarCategoriaComponent,
  },
  {
    path: 'proveedores',
    component: PaginaProveedoresComponent,
  },
  {
    path: 'agregar-proveedor',
    component: PaginaAgregarProveedorComponent,
  },
  {
    path: 'pedido',
    component: PaginaPedidoComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
