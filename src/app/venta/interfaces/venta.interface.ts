import { Producto } from '../../producto/interfaces/producto.interface';

export interface Venta {
  id: number;
  total: number;
  fecha: Date;
  cajero: number;
  producto: Producto[];
}
