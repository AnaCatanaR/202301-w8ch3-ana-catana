export interface UserStructure {
  id: number;
  username: string;
  email: string;
  token: string;
  isLogged: boolean;
  shippingDetails: string;
}

export interface CarStructure {
  id: number;
  model: string;
  brand: string;
  stock: number;
  price: number;
}

export type CarsStructure = CarStructure[];
export type UsersStructure = UserStructure[];
