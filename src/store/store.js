import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlicer";
import productDetailReducer from "./productDetailSlicer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
  },
});
