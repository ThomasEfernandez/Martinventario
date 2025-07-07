import { Routes } from '@angular/router';
//import { authGuardFn } from './auth/guard/auth.guard-fn';
/* INICIAR SESION */
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
//EMPLEADO
import { PaginaEmpleadosComponent } from './empleado/pages/pagina-empleados/pagina-empleados.component';
import { PaginaAgregarEmpleadoComponent } from './empleado/pages/pagina-agregar-empleado/pagina-agregar-empleado.component';
//INGRESO
import { PaginaIngresosComponent } from './ingreso/pages/pagina-ingresos/pagina-ingresos.component';
import { PaginaRealizarIngresoComponent } from './ingreso/pages/pagina-realizar-ingreso/pagina-realizar-ingreso.component';
//EGRESO
import { PaginaEgresosComponent } from './egreso/pages/pagina-egresos/pagina-egresos.component';
import { PaginaRealizarEgresoComponent } from './egreso/pages/pagina-realizar-egreso/pagina-realizar-egreso.component';
//PEDIDO
import { PaginaPedidosComponent } from './pedido/pages/pagina-pedidos/pagina-pedidos.component';
import { PaginaAgregarPedidoComponent } from './pedido/pages/pagina-agregar-pedido/pagina-agregar-pedido.component';
import { PaginaModificarPedidoComponent } from './pedido/pages/pagina-modificar-pedido/pagina-modificar-pedido.component';

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
    path: 'agregar-producto',
    component: PaginaAgregarProductoComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'modificar-producto/:id',
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
    path: 'agregar-proveedor',
    component: PaginaAgregarProveedorComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'modificar-proveedor/:id',
    component: PaginaModificarProveedoresComponent,
    // canActivate: [authGuardFn],
  },
  //CATEGORIA
  {
    path: 'categorias',
    component: PaginaCategoriasComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'agregar-categoria',
    component: PaginaAgregarCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'categoria/:cat',
    component: PaginaVerDetalleCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'modificar-categoria/:cat',
    component: PaginaModificarCategoriaComponent,
    // canActivate: [authGuardFn],
  },
  //ETIQUETA
  {
    path: 'agregar-etiqueta',
    component: PaginaAgregarEtiquetaComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'modificar-etiqueta/:id',
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
    path: 'agregar-empleado',
    component: PaginaAgregarEmpleadoComponent,
  },
  //INGRESO
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
  //EGRESO
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
  //PEDIDO
  {
    path: 'pedidos',
    component: PaginaPedidosComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'agregar-pedido',
    component: PaginaAgregarPedidoComponent,
    // canActivate: [authGuardFn],
  },
  {
    path: 'modificar-pedido/:id',
    component: PaginaModificarPedidoComponent,
    // canActivate: [authGuardFn],
  },
  //
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
