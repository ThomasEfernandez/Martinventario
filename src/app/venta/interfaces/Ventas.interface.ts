import { Cajero } from "../../cajero/interfaces/cajero.interface";
import { Productos } from "../../interfaces/Productos.interface";

export interface Ventas {
  id: number ,
  total: number,
  fecha: Date,
  cajero: number,
  producto: Productos []
}
