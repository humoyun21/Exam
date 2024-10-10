import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    categories: [],
    vendors: [],
    searchText: '',
  }

export const searchData = createSlice({
    name: 'search',
    initialState,
    reducers: {

    }
})

export const { } = searchData.actions

export default searchData.reducer