import { Cajeros } from "../../cajero/interfaces/Cajeros.interface";
import { Productos } from "../../interfaces/Productos.interface";

export interface Ventas {
  id: number ,
  total: number,
  fecha: Date,
  cajero: Cajeros,
  producto: Productos
}
