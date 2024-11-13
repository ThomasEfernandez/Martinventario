import { Producto } from './../../producto/interfaces/producto.interface';
import { Cajero } from '../../cajero/interfaces/cajero.interface';
export interface Venta {
  id: number;
  total: number;
  fecha: Date;
  cajero: number;
  productos: {
    elProducto: Producto,
    cantidad: number
  }[]
}
