import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";
import products from "./slices/products";
import product from "./slices/product";
import cart from "./slices/cart";

export const store = configureStore({
  reducer: {
    home,
    products,
    product,
    cart,
  }
})