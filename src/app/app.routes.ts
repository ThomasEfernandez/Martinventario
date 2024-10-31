import { PaginaAgregarProductoComponent } from './producto/pages/pagina-agregar-producto/pagina-agregar-producto.component'; 
import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component';
import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';
import { ListarCategoriasComponent } from './categoria/components/listar-categorias/listar-categorias.component';


export const routes: Routes = [
  {
    path: '',
    component: IniciarSesionComponent,
  },
  // {
  //   path:'',
  //   component: PaginaPrincipalComponent
  // },
  {
    path: 'agregarProducto',
    component: PaginaAgregarProductoComponent,
  },
  {
    path: 'pedido',
    component: PaginaPedidoComponent,
  },
  {
    path: 'listarCategorias',
    component: ListarCategoriasComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
