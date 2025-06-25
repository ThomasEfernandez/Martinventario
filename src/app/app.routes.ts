import { Routes } from '@angular/router';
import { authGuardFn } from './auth/guard/auth.guard-fn';

import { PaginaIniciarSesionComponent } from './sesion/pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component';

/* PRODUCTOS */

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

/* SECCIONES */
import { PaginaSeccionesComponent } from './secciones/pages/pagina-secciones/pagina-secciones.component';

//EMPLEADOS
import { PaginaEmpleadosComponent } from './empleado/pages/pagina-empleados/pagina-empleados.component';
import { PaginaAgregarEmpleadoComponent } from './empleado/pages/pagina-agregar-empleado/pagina-agregar-empleado.component';

//INGRESOS
import { PaginaIngresosComponent } from './ingreso/pages/pagina-ingresos/pagina-ingresos.component';
import { PaginaRealizarIngresoComponent } from './ingreso/pages/pagina-realizar-ingreso/pagina-realizar-ingreso.component';

//EGRESOS
import { PaginaEgresosComponent } from './egreso/pages/pagina-egresos/pagina-egresos.component';
import { PaginaRealizarEgresoComponent } from './egreso/pages/pagina-realizar-egreso/pagina-realizar-egreso.component';




///// FALTA

//PEDIDOS
import { PaginaPedidosAdminComponent } from './admin/pages/pagina-pedidos-admin/pagina-pedidos-admin.component';
import { PaginaAgregarPedidoAdminComponent } from './admin/pages/pagina-agregar-pedido-admin/pagina-agregar-pedido-admin.component';
import { PaginaModificarPedidoAdminComponent } from './admin/pages/pagina-modificar-pedido-admin/pagina-modificar-pedido-admin.component';


// FIN

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

  //EMPLEADOS
  {
    path: 'empleados',
    component: PaginaEmpleadosComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'empleados/agregar',
    component: PaginaAgregarEmpleadoComponent,
  },

  //INGRESOS
  {
    path: 'ingresos',
    component: PaginaIngresosComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'realizar-ingreso',
    component: PaginaRealizarIngresoComponent,
    // canActivate: [authGuardFn],
  },

  //EGRESOS
  {
    path: 'egresos',
    component: PaginaEgresosComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'realizar-egreso',
    component: PaginaRealizarEgresoComponent,
    // canActivate: [authGuardFn],
  },






  // FALTA



  //PEDIDOS
  {
    path: 'pedidos',
    component: PaginaPedidosAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'pedidos/agregar',
    component: PaginaAgregarPedidoAdminComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'pedidos/modificar',
    component: PaginaModificarPedidoAdminComponent,
    // canActivate: [authGuardFn],
  },


  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
