import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import signInReducer from "./features/signIn/signInSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    signIn: signInReducer,
  },
});
