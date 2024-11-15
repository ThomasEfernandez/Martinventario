import { Routes } from '@angular/router';
import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';

//admin

import { PaginaPrincipalAdminComponent } from './admin/pages/pagina-principal-admin/pagina-principal-admin.component';

import { PaginaProveedoresAdminComponent } from './admin/pages/pagina-proveedores-admin/pagina-proveedores-admin.component';
import { PaginaAgregarProveedorAdminComponent } from './admin/pages/pagina-agregar-proveedor-admin/pagina-agregar-proveedor-admin.component';

import { PaginaProductosAdminComponent } from './admin/pages/pagina-productos-admin/pagina-productos-admin.component';
import { PaginaAgregarProductoAdminComponent } from './admin/pages/pagina-agregar-producto-admin/pagina-agregar-producto-admin.component';

import { PaginaPedidosAdminComponent } from './admin/pages/pagina-pedidos-admin/pagina-pedidos-admin.component';
import { PaginaAgregarPedidoAdminComponent } from './admin/pages/pagina-agregar-pedido-admin/pagina-agregar-pedido-admin.component';

import { PaginaCategoriasAdminComponent } from './admin/pages/pagina-categorias-admin/pagina-categorias-admin.component';
import { PaginaAgregarCategoriaAdminComponent } from './admin/pages/pagina-agregar-categoria-admin/pagina-agregar-categoria-admin.component';
import { PaginaVerDetalleCategoriaAdminComponent } from './admin/pages/pagina-ver-detalle-categoria-admin/pagina-ver-detalle-categoria-admin.component';

import { PaginaAgregarEtiquetaAdminComponent } from './admin/pages/pagina-agregar-etiqueta-admin/pagina-agregar-etiqueta-admin.component';

import { PaginaCajerosAdminComponent } from './admin/pages/pagina-cajeros-admin/pagina-cajeros-admin.component';

import { PaginaVentasAdminComponent } from './admin/pages/pagina-ventas-admin/pagina-ventas-admin.component';
import { PaginaRealizarVentaAdminComponent } from './admin/pages/pagina-realizar-venta-admin/pagina-realizar-venta-admin.component';
import { PaginaVerDetalleVentaAdminComponent } from './admin/pages/pagina-ver-detalle-venta-admin/pagina-ver-detalle-venta-admin.component';

//repositor

import { PaginaPrincipalRepositorComponent } from './repositor/pages/pagina-principal-repositor/pagina-principal-repositor.component';

import { PaginaProveedoresRepositorComponent } from './repositor/pages/pagina-proveedores-repositor/pagina-proveedores-repositor.component';
import { PaginaAgregarProveedorRepositorComponent } from './repositor/pages/pagina-agregar-proveedor-repositor/pagina-agregar-proveedor-repositor.component';

import { PaginaProductosRepositorComponent } from './repositor/pages/pagina-productos-repositor/pagina-productos-repositor.component';
import { PaginaAgregarProductoRepositorComponent } from './repositor/pages/pagina-agregar-producto-repositor/pagina-agregar-producto-repositor.component';

import { PaginaPedidosRepositorComponent } from './repositor/pages/pagina-pedidos-repositor/pagina-pedidos-repositor.component';
import { PaginaAgregarPedidoRepositorComponent } from './repositor/pages/pagina-agregar-pedido-repositor/pagina-agregar-pedido-repositor.component';

import { PaginaCategoriasRepositorComponent } from './repositor/pages/pagina-categorias-repositor/pagina-categorias-repositor.component';
import { PaginaAgregarCategoriaRepositorComponent } from './repositor/pages/pagina-agregar-categoria-repositor/pagina-agregar-categoria-repositor.component';
//ver detalle

import { PaginaAgregarEtiquetaRepositorComponent } from './repositor/pages/pagina-agregar-etiqueta-repositor/pagina-agregar-etiqueta-repositor.component';

//

import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';

import { PaginaCajeroComponent } from './cajero/pages/pagina-cajero/pagina-cajero.component';
import { authGuardFn } from './auth/guard/auth.guard-fn';
import { PaginaRepositoresAdminComponent } from './admin/pages/pagina-repositores-admin/pagina-repositores-admin.component';
import { PaginaAgregarRepositorAdminComponent } from './admin/pages/pagina-agregar-repositor-admin/pagina-agregar-repositor-admin.component';
import { PaginaAgregarCajeroAdminComponent } from './admin/pages/pagina-agregar-cajero-admin/pagina-agregar-cajero-admin.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  //Admin
  {
    path: 'admin',
    component: PaginaPrincipalAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/proveedores',
    component: PaginaProveedoresAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/proveedores/agregar',
    component: PaginaAgregarProveedorAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/productos',
    component: PaginaProductosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/productos/agregar',
    component: PaginaAgregarProductoAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/pedidos',
    component: PaginaPedidosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/pedidos/agregar',
    component: PaginaAgregarPedidoAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/categorias',
    component: PaginaCategoriasAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/categorias/agregar',
    component: PaginaAgregarCategoriaAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/categoria/:id',
    component: PaginaVerDetalleCategoriaAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/etiquetas/agregar',
    component: PaginaAgregarEtiquetaAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/cajeros',
    component: PaginaCajerosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/cajeros/agregar',
    component: PaginaAgregarCajeroAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/ventas',
    component: PaginaVentasAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/ventas/realizar',
    component: PaginaRealizarVentaAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/venta/:id',
    component: PaginaVerDetalleVentaAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/repositor',
    component: PaginaRepositoresAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/repositor/agregar',
    component: PaginaAgregarRepositorAdminComponent,
    // canActivate: [authGuardFn],
  },
  /*Repositor*/
  {
    path: 'repositor',
    component: PaginaPrincipalRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/proveedores',
    component: PaginaProveedoresRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/proveedores/agregar',
    component: PaginaAgregarProveedorRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/productos',
    component: PaginaProductosRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/productos/agregar',
    component: PaginaAgregarProductoRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/pedidos',
    component: PaginaPedidosRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/pedidos/agregar',
    component: PaginaAgregarPedidoRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/categorias',
    component: PaginaCategoriasRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/categorias/agregar',
    component: PaginaAgregarCategoriaRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/etiquetas/agregar',
    component: PaginaAgregarEtiquetaRepositorComponent,
    // canActivate: [authGuardFn],
  },
  // Cajero

  //
  {
    path: 'cajeros',
    component: PaginaCajeroComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'pedido',
    component: PaginaPedidoComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
