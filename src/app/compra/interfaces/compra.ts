import { Producto } from "../../producto/interfaces/producto.interface";

export interface Compra {
    id:number,
    proveedor:string,
    idProducto:number,
    cantidad:number,
    totalCompra:number

}
