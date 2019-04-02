interface State {
  id: number;
  name: string;
}

interface City {
  id: number;
  name: string;
  state: State;
}

export interface Address {
  id: number;
  address: string;
  number: number;
  additionalAddressInfo: string;
  area: string;
  zipCode: string;
  city: City;
}
