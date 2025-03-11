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

import { PaginaCajerosAdminComponent } from './admin/pages/pagina-cajeros-admin(ELIMINAR)/pagina-cajeros-admin.component';

import { PaginaEgresosAdminComponent } from './admin/pages/pagina-egresos-admin/pagina-egresos-admin.component';
import { PaginaRealizarEgresoAdminComponent } from './admin/pages/pagina-realizar-egreso-admin/pagina-realizar-egreso-admin.component';
import { PaginaVerDetalleEgresoAdminComponent } from './admin/pages/pagina-ver-detalle-egreso-admin/pagina-ver-detalle-egreso-admin.component';

//repositor

import { PaginaPrincipalRepositorComponent } from './repositor/pages/pagina-principal-repositor/pagina-principal-repositor.component';

import { PaginaProveedoresRepositorComponent } from './repositor/pages/pagina-proveedores-entradas/pagina-proveedores-entradas.component';
import { PaginaAgregarProveedorRepositorComponent } from './repositor/pages/pagina-agregar-proveedor-entradas/pagina-agregar-proveedor-entradas.component';

import { PaginaProductosRepositorComponent } from './repositor/pages/pagina-productos-entradas/pagina-productos-entradas.component';
import { PaginaAgregarProductoRepositorComponent } from './repositor/pages/pagina-agregar-producto-entradas/pagina-agregar-producto-entradas.component';

import { PaginaPedidosRepositorComponent } from './repositor/pages/pagina-pedidos-entradas/pagina-pedidos-entradas.component';
import { PaginaAgregarPedidoRepositorComponent } from './repositor/pages/pagina-agregar-pedido-entradas/pagina-agregar-pedido-entradas.component';
import { PaginaCategoriasRepositorComponent } from './repositor/pages/pagina-categorias-entradas/pagina-categorias-entradas.component';
import { PaginaAgregarCategoriaEntradaComponent } from './repositor/pages/pagina-agregar-categoria-entradas/pagina-agregar-categoria-entradas.component';
import { PaginaVerDetalleCategoriaRepositorComponent } from './repositor/pages/pagina-ver-detalle-categoria-entradas/pagina-ver-detalle-categoria-entradas.component';

import { PaginaAgregarEtiquetaEntradasComponent } from './repositor/pages/pagina-agregar-etiqueta-entradas/pagina-agregar-etiqueta-entradas.component';

//

import { PaginaPedidoComponent } from './compra/pages/pagina-pedido/pagina-pedido.component';

import { PaginaCajeroComponent } from './cajero/pages/pagina-cajero/pagina-cajero.component';
import { authGuardFn } from './auth/guard/auth.guard-fn';
import { PaginaRepositoresAdminComponent } from './admin/pages/pagina-entrada-admin/pagina-entrada-admin.component';
import { PaginaAgregarRepositorAdminComponent } from './admin/pages/pagina-agregar-entrada-admin/pagina-agregar-entrada-admin.component';
import { PaginaAgregarCajeroAdminComponent } from './admin/pages/pagina-agregar-cajero-admin(ELIMINAR)/pagina-agregar-cajero-admin.component';

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
    path: 'admin/cajero',
    component: PaginaCajerosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/cajeros/agregar',
    component: PaginaAgregarCajeroAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/egresos',
    component: PaginaEgresosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/egreso/realizar',
    component: PaginaRealizarEgresoAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/egreso/:id',
    component: PaginaVerDetalleEgresoAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/entradas',
    component: PaginaRepositoresAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/entrada/agregar',
    component: PaginaAgregarRepositorAdminComponent,
    // canActivate: [authGuardFn],
  },
  /*Repositor*/
  {
    path: 'entrada',
    component: PaginaPrincipalRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/proveedores',
    component: PaginaProveedoresRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/proveedores/agregar',
    component: PaginaAgregarProveedorRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/productos',
    component: PaginaProductosRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/productos/agregar',
    component: PaginaAgregarProductoRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/pedidos',
    component: PaginaPedidosRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'entrada/pedidos/agregar',
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
    component: PaginaAgregarCategoriaEntradaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/categoria/:id',
    component: PaginaVerDetalleCategoriaRepositorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'repositor/etiquetas/agregar',
    component: PaginaAgregarEtiquetaEntradasComponent,
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
