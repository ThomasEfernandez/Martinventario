import { Cajeros } from "./Cajeros.interface";
import { Productos } from "../producto/interfaces/Productos.interface";

export interface Ventas {
  id: number ,
  total: number,
  fecha: Date,
  cajero: Cajeros,
  producto: Productos
}
