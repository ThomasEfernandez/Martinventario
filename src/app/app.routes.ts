import { PaginaModificarCategoriaAdminComponent } from './admin/pages/pagina-modificar-categoria-admin/pagina-modificar-categoria-admin.component';
import { Routes } from '@angular/router';
import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';
//admin
import { PaginaPrincipalAdminComponent } from './admin/pages/pagina-principal-admin/pagina-principal-admin.component';
import { PaginaProveedoresAdminComponent } from './admin/pages/pagina-proveedores-admin/pagina-proveedores-admin.component';
import { PaginaModificarProveedoresAdminComponent } from './admin/pages/pagina-modificar-proveedores-admin/pagina-modificar-proveedores-admin.component';
import { PaginaAgregarProveedorAdminComponent } from './admin/pages/pagina-agregar-proveedor-admin/pagina-agregar-proveedor-admin.component';
import { PaginaProductosAdminComponent } from './admin/pages/pagina-productos-admin/pagina-productos-admin.component';
import { PaginaModificarProductoAdminComponent } from './admin/pages/pagina-modificar-producto-admin/pagina-modificar-producto-admin.component';
import { PaginaAgregarProductoAdminComponent } from './admin/pages/pagina-agregar-producto-admin/pagina-agregar-producto-admin.component';
import { PaginaCategoriasAdminComponent } from './admin/pages/pagina-categorias-admin/pagina-categorias-admin.component';
import { PaginaAgregarCategoriaAdminComponent } from './admin/pages/pagina-agregar-categoria-admin/pagina-agregar-categoria-admin.component';
import { PaginaVerDetalleCategoriaAdminComponent } from './admin/pages/pagina-ver-detalle-categoria-admin/pagina-ver-detalle-categoria-admin.component';
import { PaginaModificarEtiquetaAdminComponent } from './admin/pages/pagina-modificar-etiqueta-admin/pagina-modificar-etiqueta-admin.component';
import { PaginaAgregarEtiquetaAdminComponent } from './admin/pages/pagina-agregar-etiqueta-admin/pagina-agregar-etiqueta-admin.component';
import { PaginaCajerosAdminComponent } from './admin/pages/pagina-cajeros-admin/pagina-cajeros-admin.component';
import { PaginaAgregarCajeroAdminComponent } from './admin/pages/pagina-agregar-cajero-admin/pagina-agregar-cajero-admin.component';
import { PaginaVentasAdminComponent } from './admin/pages/pagina-ventas-admin/pagina-ventas-admin.component';
import { PaginaRealizarVentaAdminComponent } from './admin/pages/pagina-realizar-venta-admin/pagina-realizar-venta-admin.component';
import { PaginaVerDetalleVentaAdminComponent } from './admin/pages/pagina-ver-detalle-venta-admin/pagina-ver-detalle-venta-admin.component';
import { PaginaRepositoresAdminComponent } from './admin/pages/pagina-repositores-admin/pagina-repositores-admin.component';
import { PaginaAgregarRepositorAdminComponent } from './admin/pages/pagina-agregar-repositor-admin/pagina-agregar-repositor-admin.component';
import { PaginaPedidosAdminComponent } from './admin/pages/pagina-pedidos-admin/pagina-pedidos-admin.component';
import { PaginaAgregarPedidoAdminComponent } from './admin/pages/pagina-agregar-pedido-admin/pagina-agregar-pedido-admin.component';
import { PaginaComprasAdminComponent } from './admin/pages/pagina-compras-admin/pagina-compras-admin.component';
import { PaginaAgregarCompraAdminComponent } from './admin/pages/pagina-agregar-compra-admin/pagina-agregar-compra-admin.component';
//repositor
import { PaginaPrincipalRepositorComponent } from './repositor/pages/pagina-principal-entradas/pagina-principal-entradas.component';
import { PaginaProveedoresRepositorComponent } from './repositor/pages/pagina-proveedores-entradas/pagina-proveedores-entradas.component';
import { PaginaAgregarProveedorRepositorComponent } from './repositor/pages/pagina-agregar-proveedor-entradas/pagina-agregar-proveedor-entradas.component';
import { PaginaProductosRepositorComponent } from './repositor/pages/pagina-productos-entradas/pagina-productos-entradas.component';
import { PaginaAgregarProductoRepositorComponent } from './repositor/pages/pagina-agregar-producto-entradas/pagina-agregar-producto-entradas.component';
import { PaginaCategoriasRepositorComponent } from './repositor/pages/pagina-categorias-entradas/pagina-categorias-entradas.component';
import { PaginaAgregarCategoriaEntradaComponent } from './repositor/pages/pagina-agregar-categoria-entradas/pagina-agregar-categoria-entradas.component';
import { PaginaVerDetalleCategoriaRepositorComponent } from './repositor/pages/pagina-ver-detalle-categoria-entradas/pagina-ver-detalle-categoria-entradas.component';
import { PaginaAgregarEtiquetaEntradasComponent } from './repositor/pages/pagina-agregar-etiqueta-entradas/pagina-agregar-etiqueta-entradas.component'; 
import { PaginaPedidosRepositorComponent } from './repositor/pages/pagina-pedidos-entradas/pagina-pedidos-entradas.component';
import { PaginaAgregarPedidoRepositorComponent } from './repositor/pages/pagina-agregar-pedido-entradas/pagina-agregar-pedido-entradas.component';
import { PaginaAgregarCompraRepositorComponent } from './repositor/pages/pagina-agregar-compra-entradas/pagina-agregar-compra-entradas.component';
import { PaginaComprasRepositorComponent } from './repositor/pages/pagina-compras-entradas/pagina-compras-entradas.component';
//cajero
import { PaginaPrincipalCajeroComponent } from './cajero/pages/pagina-principal-cajero/pagina-principal-cajero.component';
import { PaginaRealizarVentaCajeroComponent } from './cajero/pages/pagina-realizar-venta-cajero/pagina-realizar-venta-cajero.component';
import { PaginaVerDetalleVentaCajeroComponent } from './cajero/pages/pagina-ver-detalle-venta-cajero/pagina-ver-detalle-venta-cajero.component';
//auth
import { authGuardFn } from './auth/guard/auth.guard-fn';

export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  //Admin
  {
    path: 'admin',
    component: PaginaPrincipalAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/proveedores',
    component: PaginaProveedoresAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/proveedores/agregar',
    component: PaginaAgregarProveedorAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/proveedores/modificar/:id',
    component: PaginaModificarProveedoresAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/productos',
    component: PaginaProductosAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/productos/agregar',
    component: PaginaAgregarProductoAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/productos/modificar/:id',
    component: PaginaModificarProductoAdminComponent,
    canActivate: [authGuardFn],
  },

  {
    path: 'admin/categorias',
    component: PaginaCategoriasAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/categorias/agregar',
    component: PaginaAgregarCategoriaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/categoria/modificar/:id',
    component: PaginaModificarCategoriaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/categoria/:id',
    component: PaginaVerDetalleCategoriaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/etiquetas/agregar',
    component: PaginaAgregarEtiquetaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/categoria/:idC/etiqueta/modificar/:idE',
    component: PaginaModificarEtiquetaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/cajeros',
    component: PaginaCajerosAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/cajeros/agregar',
    component: PaginaAgregarCajeroAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/ventas',
    component: PaginaVentasAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/ventas/realizar',
    component: PaginaRealizarVentaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/venta/:id',
    component: PaginaVerDetalleVentaAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/entrada',
    component: PaginaRepositoresAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/entradas/agregar',
    component: PaginaAgregarRepositorAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/pedidos',
    component: PaginaPedidosAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/pedidos/agregar',
    component: PaginaAgregarPedidoAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/compras',
    component: PaginaComprasAdminComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'admin/compras/agregar',
    component: PaginaAgregarCompraAdminComponent,
    canActivate: [authGuardFn],
  },
  /*Repositor*/
  {
    path: 'entrada',
    component: PaginaPrincipalRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/proveedores',
    component: PaginaProveedoresRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/proveedores/agregar',
    component: PaginaAgregarProveedorRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/productos',
    component: PaginaProductosRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/productos/agregar',
    component: PaginaAgregarProductoRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/categorias',
    component: PaginaCategoriasRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/categorias/agregar',
    component: PaginaAgregarCategoriaEntradaComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/categoria/:id',
    component: PaginaVerDetalleCategoriaRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/etiquetas/agregar',
    component: PaginaAgregarEtiquetaEntradasComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/pedidos',
    component: PaginaPedidosRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/pedidos/agregar',
    component: PaginaAgregarPedidoRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/compras',
    component: PaginaComprasRepositorComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'entrada/compras/agregar',
    component: PaginaAgregarCompraRepositorComponent,
    canActivate: [authGuardFn],
  },
  // Cajero
  {
    path: 'cajero',
    component: PaginaPrincipalCajeroComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'cajero/ventas/realizar',
    component: PaginaRealizarVentaCajeroComponent,
    canActivate: [authGuardFn],
  },
  {
    path: 'cajero/venta/:id',
    component: PaginaVerDetalleVentaCajeroComponent,
    canActivate: [authGuardFn],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
