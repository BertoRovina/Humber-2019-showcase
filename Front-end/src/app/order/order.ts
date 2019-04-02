import {Product} from '../product/product';
import {Customer} from '../customer/customer';
import {Address} from '../customer/address';

interface Payment {
  type: string;
  id: number;
  monthlyInstallments: number;
  state: string;
}

interface ItemSet {
  discount: number;
  quantity: number;
  price: number;
  product: Product;
  subTotal: number;
}

export interface Order {
  id: number;
  instant: string;
  payment: Payment;
  client: Customer;
  address: Address;
  itemSet: ItemSet[];
  totalAmount: number;
}
