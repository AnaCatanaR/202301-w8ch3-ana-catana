import { UserStructure } from "../../../types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  const initialUserState: UserStructure = {
    id: 1,
    username: "",
    token: "",
    email: "",
    isLogged: true,
    shippingDetails: "",
  };

  describe("When it receives a user with isLogged status set on 'false'", () => {
    const userToLogin: UserStructure = {
      id: 2,
      username: "janesmith",
      token: "def456hij789",
      email: "janesmith@example.com",
      isLogged: false,
      shippingDetails: "456 Oak St, Anytown, USA",
    };

    const userLogged: UserStructure = {
      id: 2,
      username: "janesmith",
      token: "def456hij789",
      email: "janesmith@example.com",
      isLogged: true,
      shippingDetails: "456 Oak St, Anytown, USA",
    };

    test("Then it should return a user with isLogged status set on 'true'", () => {
      const loginUser = loginUserActionCreator(userToLogin);
      const newLoginUser = userReducer(initialUserState, loginUser);

      expect(newLoginUser).toStrictEqual(userLogged);
    });
  });
});
