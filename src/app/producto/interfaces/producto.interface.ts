export interface Producto {
  id: string;
  nombreSuper?:string,
  nombreProducto: string;
  cantidad: number;
  marca: string;
  proveedor: string;
  precioCompra: number;
  precioVenta: number;
  categoria: string;
  etiqueta: string;
}
