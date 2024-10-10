import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductColor {
  hex_code: string;
  colour_name: string;
}

export interface CartProduct {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: ProductColor[];
  product_link: string;
  product_type: string;
  rating: number | null;
  tag_list: string[];
  updated_at: string;
  website_link: string;
  quantity: number | undefined;
}

export interface CartState {
  cart: CartProduct[];
  isLoading: boolean;
}

const initialState: CartState = {
  cart: [],
  isLoading: true,
};

export const allDataReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    allDataStart: (state) => {
      state.isLoading = false
    },
    blushDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    bronzerDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    eyeBrowDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    eyeLinerDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    eyeShadowDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    foundationDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    lipLinerDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    lipstickDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    mascaraDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
    nailPolishDataSuccess: (state, action: PayloadAction<CartProduct[]>) => {
      state.isLoading = false;
      state.cart = action.payload;
    },
  },
});

export const { 
  allDataStart,
  blushDataSuccess,
  bronzerDataSuccess,
  eyeBrowDataSuccess,
  eyeLinerDataSuccess,
  eyeShadowDataSuccess,
  foundationDataSuccess,
  lipLinerDataSuccess,
  lipstickDataSuccess,
  mascaraDataSuccess,
  nailPolishDataSuccess,
} = allDataReducer.actions;

export default allDataReducer.reducer;  