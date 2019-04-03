import {Product} from '../product/product';
import {Customer} from '../customer/customer';
import {Address} from '../customer/address';

export interface Payment {
  type: string;
}

export interface CardPayment extends Payment {
  monthlyInstallments: number;
}

export interface BankBilletPayment extends Payment {
  expiryDate: string;
}

export interface CartItem {
  quantity: number;
  product: Product;
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

export interface OrderPost {
  client: Customer;
  address: Address;
  payment: Payment;
  cartItem: CartItem[];
}
