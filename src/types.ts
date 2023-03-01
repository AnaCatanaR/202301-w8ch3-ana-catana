interface UserStructure {
  id: number;
  username: string;
  email: string;
  token: string;
  isLogged: boolean;
  shippingDetails: string;
}

export type UsersStructure = UserStructure[];
