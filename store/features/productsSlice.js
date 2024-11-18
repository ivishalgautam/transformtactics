import { createSlice } from "@reduxjs/toolkit";
import productsData from "../productsData";

const initialState = {
  products: productsData,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
