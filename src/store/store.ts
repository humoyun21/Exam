import { cartReducer } from '../slice/cartSlice';
import allDataReducer from '../slice/categories'; 
import favouriteReducer from '../slice/favourite'; 
import getDataReducer from './../slice/article';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    getData: getDataReducer,
    cartReducer, 
    favourite: favouriteReducer, 
    allDataReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
