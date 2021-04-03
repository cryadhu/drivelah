import { configureStore } from "@reduxjs/toolkit";
import pickerReducer from "./feature/picker/pickerSlicer";

export default configureStore({
  reducer: {
    picker: pickerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
