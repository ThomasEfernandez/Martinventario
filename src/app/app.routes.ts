import { Routes } from '@angular/router';

import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';

// PRODUCTO
import { PaginaProductosComponent } from './producto/pages/pagina-productos/pagina-productos.component';
import { PaginaAgregarProductoComponent } from './producto/pages/pagina-agregar-producto/pagina-agregar-producto.component';
import { PaginaModificarProductoComponent } from './producto/pages/pagina-modificar-producto/pagina-modificar-producto.component';

//PROVEEDOR
import { PaginaProveedoresComponent } from './proveedor/pages/pagina-proveedores/pagina-proveedores.component';
import { PaginaAgregarProveedorComponent } from './proveedor/pages/pagina-agregar-proveedor/pagina-agregar-proveedor.component';
import { PaginaModificarProveedoresComponent } from './proveedor/pages/pagina-modificar-proveedores/pagina-modificar-proveedores.component';

//CATEGORIA
import { PaginaCategoriasComponent } from './categoria/pages/pagina-categorias/pagina-categorias.component';
import { PaginaAgregarCategoriaComponent } from './categoria/pages/pagina-agregar-categoria/pagina-agregar-categoria.component';
import { PaginaVerDetalleCategoriaComponent } from './categoria/pages/pagina-ver-detalle-categoria/pagina-ver-detalle-categoria.component';
import { PaginaModificarCategoriaComponent } from './categoria/pages/pagina-modificar-categoria/pagina-modificar-categoria.component';

//ETIQUETA
import { PaginaAgregarEtiquetaComponent } from './etiqueta/pages/pagina-agregar-etiqueta/pagina-agregar-etiqueta.component';
import { PaginaModificarEtiquetaComponent } from './etiqueta/pages/pagina-modificar-etiqueta/pagina-modificar-etiqueta.component';

//SECCIONES
import { PaginaSeccionesComponent } from './secciones/pages/pagina-secciones/pagina-secciones.component';







///// FALTA


//SECCIONES

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



//AUTH
import { authGuardFn } from './auth/guard/auth.guard-fn';

import { PaginaAgregarEmpleadoComponent } from './admin/pages/pagina-agregar-empleado/pagina-agregar-empleado.component';


export const routes: Routes = [
  {
    path: '',
    component: PaginaIniciarSesionComponent,
  },
  //PRODUCTO 
  {
    path: 'productos',
    component: PaginaProductosComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'productos/agregar',
    component: PaginaAgregarProductoComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'productos/modificar/:id',
    component: PaginaModificarProductoComponent,
    // canActivate: [authGuardFn],
  },
  //PROVEEDOR
  {
    path: 'proveedores',
    component: PaginaProveedoresComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'proveedores/agregar',
    component: PaginaAgregarProveedorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'proveedores/modificar/:id',
    component: PaginaModificarProveedoresComponent,
    // canActivate: [authGuardFn],
  },
  //CATEGORIA Y ETIQUETA
  {
    path: 'categorias',
    component: PaginaCategoriasComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'categorias/agregar',
    component: PaginaAgregarCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'categoria/:cat',
    component: PaginaVerDetalleCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'categoria/modificar/:id',
    component: PaginaModificarCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  //ETIQUETA
  {
    path: 'etiquetas/agregar',
    component: PaginaAgregarEtiquetaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'etiqueta/modificar/:id',
    component: PaginaModificarEtiquetaComponent,
    // canActivate: [authGuardFn],
  },

  //SECCIONES
  {
    path: 'secciones',
    component: PaginaSeccionesComponent,
    // canActivate: [authGuardFn],
  },




  // FALTA



  //SECCIONES


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
