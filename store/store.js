import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/productsSlice";
import modalSlice from "./features/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
