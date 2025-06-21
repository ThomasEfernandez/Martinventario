import { Routes } from '@angular/router';
import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';

/* ------ADMIN------ */
import { PaginaPrincipalAdminComponent } from './admin/pages/pagina-principal-admin/pagina-principal-admin.component';
//PROVEEDORES
import { PaginaProveedoresAdminComponent } from './admin/pages/pagina-proveedores-admin/pagina-proveedores-admin.component';
import { PaginaAgregarProveedorAdminComponent } from './admin/pages/pagina-agregar-proveedor-admin/pagina-agregar-proveedor-admin.component';
import { PaginaModificarProveedoresAdminComponent } from './admin/pages/pagina-modificar-proveedores-admin/pagina-modificar-proveedores-admin.component';
//PRODUCTOS
import { PaginaProductosAdminComponent } from './admin/pages/pagina-productos-admin/pagina-productos-admin.component';
import { PaginaAgregarProductoAdminComponent } from './admin/pages/pagina-agregar-producto-admin/pagina-agregar-producto-admin.component';
import { PaginaModificarProductoAdminComponent } from './admin/pages/pagina-modificar-producto-admin/pagina-modificar-producto-admin.component';
//CATEGORIAS Y ETIQUETAS
import { PaginaCategoriasAdminComponent } from './admin/pages/pagina-categorias-admin/pagina-categorias-admin.component';
import { PaginaAgregarCategoriaAdminComponent } from './admin/pages/pagina-agregar-categoria-admin/pagina-agregar-categoria-admin.component';
import { PaginaVerDetalleCategoriaAdminComponent } from './admin/pages/pagina-ver-detalle-categoria-admin/pagina-ver-detalle-categoria-admin.component';
import { PaginaModificarCategoriaAdminComponent } from './admin/pages/pagina-modificar-categoria-admin/pagina-modificar-categoria-admin.component';
import { PaginaAgregarEtiquetaAdminComponent } from './admin/pages/pagina-agregar-etiqueta-admin/pagina-agregar-etiqueta-admin.component';
//SECCIONES
import { PaginaSeccionesComponent } from './admin/pages/pagina-secciones/pagina-secciones.component';
//EMPLEADOS
import { PaginaEmpleadoComponent } from './admin/pages/pagina-empleado/pagina-empleado.component';
import { AgregarUsuarioComponent } from './usuario/components/agregar-usuario/agregar-usuario.component';
//INGRESOS
import { PaginaIngresosAdminComponent } from './admin/pages/pagina-ingresos-admin/pagina-ingresos-admin.component';
import { PaginaRealizarIngresoAdminComponent } from './admin/pages/pagina-realizar-ingreso-admin/pagina-realizar-ingreso-admin.component';
//EGRESOS
import { PaginaEgresosAdminComponent } from './admin/pages/pagina-egresos-admin/pagina-egresos-admin.component';
import { PaginaRealizarEgresoAdminComponent } from './admin/pages/pagina-realizar-egresos-admin/pagina-realizar-egresos-admin.component';
import { PaginaVerDetalleEgresoAdminComponent } from './admin/pages/pagina-ver-detalle-egreso-admin/pagina-ver-detalle-egreso-admin.component';
//PEDIDOS
import { PaginaPedidosAdminComponent } from './admin/pages/pagina-pedidos-admin/pagina-pedidos-admin.component';
import { PaginaAgregarPedidoAdminComponent } from './admin/pages/pagina-agregar-pedido-admin/pagina-agregar-pedido-admin.component';
import { PaginaModificarPedidoAdminComponent } from './admin/pages/pagina-modificar-pedido-admin/pagina-modificar-pedido-admin.component';

/* ------BASE------ */
import { PaginaPrincipalBaseComponent } from './base/pages/pagina-principal-base/pagina-principal-base.component';
//SECCIONES
import { PaginaSeccionesBaseComponent } from './base/pages/pagina-secciones-base/pagina-secciones-base.component';
//INGRESOS
import { PaginaIngresosBaseComponent } from './base/pages/pagina-ingresos-base/pagina-ingresos-base.component';
import { PaginaRealizarIngresoBaseComponent } from './base/pages/pagina-realizar-ingreso-base/pagina-realizar-ingreso-base.component';
//EGRESOS
import { PaginaEgresosBaseComponent } from './base/pages/pagina-egresos-base/pagina-egresos-base.component';
import { PaginaRealizarEgresoBaseComponent } from './base/pages/pagina-realizar-egreso-base/pagina-realizar-egreso-base.component';
///////////// FALTARIA VER DETALLE EGRESO BASE (PARA ADMIN ESTA)
//PEDIDO
import { PaginaPedidosBaseComponent } from './base/pages/pagina-pedidos-base/pagina-pedidos-base.component';
import { PaginaRealizarPedidoBaseComponent } from './base/pages/pagina-realizar-pedido-base/pagina-realizar-pedido-base.component';
//PRODUCTO
import { PaginaModificarProductoBaseComponent } from './base/pages/pagina-modificar-producto-base/pagina-modificar-producto-base.component';

/* ------AUTH------ */
import { authGuardFn } from './auth/guard/auth.guard-fn';
import { PaginaAgregarEmpleadoComponent } from './admin/pages/pagina-agregar-empleado/pagina-agregar-empleado.component';

export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  /* ADMIN */
  {
    path: 'admin',
    component: PaginaPrincipalAdminComponent,
    // canActivate: [authGuardFn],
  },

  //PROVEEDORES
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
    path: 'admin/proveedores/modificar/:id',
    component: PaginaModificarProveedoresAdminComponent,
    // canActivate: [authGuardFn],
  },

  //PRODUCTOS
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
    path: 'admin/productos/modificar/:id',
    component: PaginaModificarProductoAdminComponent,
    // canActivate: [authGuardFn],
  },

  //CATEGORIAS Y ETIQUETAS
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
    path: 'admin/categoria/modificar/:id',
    component: PaginaModificarCategoriaAdminComponent,
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

  //SECCIONES
  {
    path: 'admin/secciones',
    component: PaginaSeccionesComponent,
    // canActivate: [authGuardFn],
  },

  //EMPLEADOS
  {
    path: 'admin/empleados',
    component: PaginaEmpleadoComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/empleados/agregar',
    component: PaginaAgregarEmpleadoComponent,
  },

  //INGRESOS
  {
    path: 'admin/ingresos',
    component: PaginaIngresosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/realizar-ingreso',
    component: PaginaRealizarIngresoAdminComponent,
    // canActivate: [authGuardFn],
  },
  //EGRESOS
  {
    path: 'admin/egresos',
    component: PaginaEgresosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'admin/realizar-egreso',
    component: PaginaRealizarEgresoAdminComponent,
    // canActivate: [authGuardFn],
  },
  //ver si se usa el detalle
  {
    path: 'admin/egresos/:id',
    component: PaginaVerDetalleEgresoAdminComponent,
    // canActivate: [authGuardFn],
  },
  //PEDIDOS
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
    path: 'admin/pedidos/modificar',
    component: PaginaModificarPedidoAdminComponent,
    // canActivate: [authGuardFn],
  },

  /* BASE */
  {
    path: 'base',
    component: PaginaPrincipalBaseComponent,
    // canActivate: [authGuardFn],
  },
  //PRODUCTOS
  {
    path: 'base/productos',
    component: PaginaPrincipalBaseComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'base/productos/modificar/:id',
    component: PaginaModificarProductoBaseComponent,
    // canActivate: [authGuardFn],
  },

  //SECCIONES
  {
    path: 'base/secciones',
    component: PaginaSeccionesBaseComponent,
    // canActivate: [authGuardFn],
  },

  //INGRESOS
  {
    path: 'base/ingresos',
    component: PaginaIngresosBaseComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'base/realizar-ingreso',
    component: PaginaRealizarIngresoBaseComponent,
    // canActivate: [authGuardFn],
  },

  //EGRESOS
  {
    path: 'base/egresos',
    component: PaginaEgresosBaseComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'base/realizar-egreso',
    component: PaginaRealizarEgresoBaseComponent,
    // canActivate: [authGuardFn],
  },

  //PEDIDO
  {
    path: 'base/pedidos',
    component: PaginaPedidosBaseComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'base/pedidos/agregar',
    component: PaginaRealizarPedidoBaseComponent,
    // canActivate: [authGuardFn],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
