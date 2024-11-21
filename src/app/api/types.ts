export interface Pricee {
  current_retail: number;
}

export interface ProductDescriptionn {
  title: string;
}

export interface Itemm {
  product_description: ProductDescriptionn;
}

export interface Productt {
  item: Itemm;
  price: Pricee;
}

export interface Searchh {
  products: Productt[];
}

export interface Dataa {
  search: Searchh;
}

export interface Response {
  data: Dataa;
}

export interface Product {}
