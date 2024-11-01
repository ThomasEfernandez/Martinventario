import { PaginaAgregarProductoComponent } from './producto/pages/pagina-agregar-producto/pagina-agregar-producto.component';
import { Routes } from '@angular/router';
import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';
import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';
import { PaginaCategoriasComponent } from './categoria/pages/pagina-categorias/pagina-categorias.component';
import { PaginaAgregarCategoriaComponent } from './categoria/pages/pagina-agregar-categoria/pagina-agregar-categoria.component';
import { PaginaPrincipalAdminComponent } from './admin/pages/pagina-principal-admin/pagina-principal-admin.component';
import { PaginaProductosComponent } from './producto/pages/pagina-productos/pagina-productos.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  {
    path: 'admin',
    component: PaginaPrincipalAdminComponent,
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
    path: 'pedido',
    component: PaginaPedidoComponent,
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
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
