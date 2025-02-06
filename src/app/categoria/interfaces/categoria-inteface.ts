import { Etiqueta } from '../../etiqueta/interfaces/etiqueta.interface';

export interface Categoria {
  id: string,
  nombreSuper?:string,
  nombreCategoria: string;
  estado: boolean;
  etiquetas: Etiqueta[];
}
