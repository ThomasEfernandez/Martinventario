import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component';
import { AgregarProductoComponent } from './producto/components/agregar-producto/agregar-producto.component';
import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';

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
    component: AgregarProductoComponent,
  },{
    path: 'pedido',
    component: PaginaPedidoComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
