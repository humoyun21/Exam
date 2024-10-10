import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Article {
  image_link: string,
  brand: string,
  category: string,
  name: string,
  price: number,
  description: string,
  id: number
}

export interface getDataSlice {
  article: Article[],
  value: 0,
  isLoading: boolean,
  error: null,
}

const initialState: getDataSlice = {
  value: 0,
  article: [],
  isLoading: false,
  error: null
}

export const getDataReducer = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getDataStart: (state) => {
      state.isLoading = true
    },
    getDataSuccess: (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      state.article = action.payload
    },
    getDataFailure: (state, action: PayloadAction<null>) => {
      state.error = action.payload
    },
  },
})


export const { getDataStart, getDataSuccess, getDataFailure } = getDataReducer.actions

export default getDataReducer.reducer