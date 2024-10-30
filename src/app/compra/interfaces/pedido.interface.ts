import { Producto } from '../../producto/interfaces/producto.interface';

export interface Pedido {
  id: number;
  proveedor: string;
  idProducto: number;
  cantidad: number;
  totalCompra: number;
}
