import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const getCurrentTime = () => {
  const time = moment();
  const minute = time.minutes();
  if (minute < 15) {
    time.set({ m: 0 });
  } else if (minute >= 15 && minute < 45) {
    time.set({ m: 0, h: time.hours + 0.5});
  } else {
    time.set({ m: 0, h: time.hours + 1});
  }
  return moment(time);
};

export const pickupSlicer = createSlice({
  name: "picker",
  initialState: {
    pickup: getCurrentTime(),
    dropOff: getCurrentTime(),
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
