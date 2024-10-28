import { Etiqueta } from "../../etiqueta/interfaces/etiqueta.interface";

export interface Categoria {
  id: number,
  nombre: string,

  etiquetas: Etiqueta[]
}
