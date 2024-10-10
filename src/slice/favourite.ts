// favourite.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from './cartSlice';

interface FavouriteState {
  favourites: CartProduct[];
}

const initialState: FavouriteState = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<CartProduct>) => {
      state.favourites.push(action.payload);
    },
  },
});

export const { addToFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
