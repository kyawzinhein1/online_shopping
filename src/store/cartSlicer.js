import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Cart items
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.length += 1; // Increase quantity if item already in cart
        existingItem.price * existingItem.length;
      } else {
        state.items.push({ ...action.payload, length: 1 }); // Add new item with initial quantity of 1
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.length > 1) {
        existingItem.length -= 1; // Decrement quantity if more than 1
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        ); // Remove item if quantity is 1
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
