import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlicer";
import productDetailReducer from "./productDetailSlicer";
import cartReducer from "./cartSlicer";

export const store = configureStore({
  reducer: {
    product: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});
