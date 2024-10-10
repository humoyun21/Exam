import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MakeupProduct {
  id: number;
  brand: string;
  name: string;
  price: string;
  image_link: string;
  product_link: string;
  category: string; 
}


interface MakeupState {
  categories: {
    [key: string]: MakeupProduct[]; 
  };
  loading: boolean;
  error: string | null;
}

const initialState: MakeupState = {
  categories: {},
  loading: false,
  error: null,
};

export const fetchMakeupProductsByCategory = createAsyncThunk(
  'makeup/fetchMakeupProductsByCategory',
  async (category: string) => {
    const response = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`
    );
    return { category, products: response.data as MakeupProduct[] };
  }
);

// Create the slice
const makeupSlice = createSlice({
  name: 'makeup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMakeupProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMakeupProductsByCategory.fulfilled, (state, action) => {
        const { category, products } = action.payload;
        state.categories[category] = products; 
        state.loading = false;
      })
      .addCase(fetchMakeupProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default makeupSlice.reducer;
