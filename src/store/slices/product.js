import { createSlice } from "@reduxjs/toolkit";
import { productGet } from "../actions/productActions";

const initialState = {
  product: {},
  loading: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productGet.pending, (state) => {
        state.loading = true
      }).addCase(productGet.fulfilled, (state, { payload }) => {
        state.loading = false
        state.product = payload[0]
      }).addCase(productGet.rejected, (state) => {
        state.loading = false
      })
  }
})

export default productSlice.reducer

