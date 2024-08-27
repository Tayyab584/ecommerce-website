// src/features/products/productsSlice.jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  products: [], // Ensure this matches your selector
  status: 'idle',
  error: null
};

// Example of fetchProducts as an async thunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('/api/products');
  return response.json();
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;
