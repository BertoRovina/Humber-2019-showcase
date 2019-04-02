import {Product} from '../product/product';

export interface Category {
  id: number;
  name: string;
  productList: Array<Product>;
}
