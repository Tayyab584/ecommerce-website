// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';  // Ensure this path is correct
import productsReducer from '../features/products/productsSlice';  // Ensure this path is correct
import userReducer from '../features/user/userSlice';  // Ensure this path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: userReducer,
  },
});
