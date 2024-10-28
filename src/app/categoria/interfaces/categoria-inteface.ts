import { Etiqueta } from '../../etiqueta/interfaces/etiqueta.interface';

export interface Categoria {
  id: number;
  nombreCategoria: string;
  etiquetas: Etiqueta[];
}
