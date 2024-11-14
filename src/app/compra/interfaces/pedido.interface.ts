import { Producto } from '../../producto/interfaces/producto.interface';

export interface Pedido {
  id: string;
  proveedor: string;
  idProducto: string;
  cantidad: number;
  totalCompra: number;
}
