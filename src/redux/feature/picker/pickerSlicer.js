import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const pickupSlicer = createSlice({
  name: "picker",
  initialState: {
    pickup: moment(),
    dropOff: moment(),
  },
  reducers: {
    setPickup: (state, action) => {
      state.pickupDateTime += action.payload;
    },
    setDropOff: (state, action) => {
      state.pickupDateTime += action.payload;
    },
  },
});

export const { setPickup, setDropOff } = pickupSlicer.actions;

export default pickupSlicer.reducer;
