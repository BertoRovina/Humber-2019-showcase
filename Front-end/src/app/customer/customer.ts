import {Address} from './address';

export interface Customer {
  id: number;
  name: string;
  email: string;
  doc: number;
  clientType: string;
  addressList: Address[];
  phones: number[];
}
