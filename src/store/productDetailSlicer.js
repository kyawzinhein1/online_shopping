import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (id) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    return data.json();
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default productDetailSlice.reducer;
