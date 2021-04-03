import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const getCurrentTime = () => {
  const time = moment();
  const minute = time.minutes();
  if (minute < 15) {
    time.set({ m: 0 });
  } else if (minute >= 15 && minute < 45) {
    time.set({ m: 30, h: time.hours() });
  } else {
    time.set({ m: 0, h: time.hours() + 1 });
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
      state.pickup = action.payload;
    },
    setDropOff: (state, action) => {
      state.dropOff = action.payload;
    },
  },
});

export const { setPickup, setDropOff } = pickupSlicer.actions;

export default pickupSlicer.reducer;
