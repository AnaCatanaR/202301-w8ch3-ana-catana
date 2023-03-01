import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsStructure } from "../../../types";

const initialCars = [] as CarsStructure;

const carsSlice = createSlice({
  name: "car",
  initialState: initialCars,
  reducers: {
    getCars: (
      currentCarState: CarsStructure,
      action: PayloadAction<CarsStructure>
    ) => [...action.payload],
  },
});

export const carsReducer = carsSlice.reducer;
export const { getCars: getCarsActionCreater } = carsSlice.actions;
