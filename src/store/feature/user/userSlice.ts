import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../../types";

const initialUserState = {} as UserStructure;

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      currentUserState: UserStructure,
      action: PayloadAction<UserStructure>
    ) => ({ ...action.payload, isLogged: true }),
    logoutUser: (currentUserState: UserStructure) => ({
      ...currentUserState,
      isLogged: false,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
