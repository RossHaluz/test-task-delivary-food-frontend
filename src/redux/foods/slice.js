import { createSlice } from '@reduxjs/toolkit';
import { getFoods } from './operetions';

const foodsSlice = createSlice({
  name: 'food',
  initialState: {
    foods: [],
    currentShop: '',
    isLoading: false,
  },
  extraReducers: {
    [getFoods.pending](state, __) {
      state.isLoading = true;
    },
    [getFoods.fulfilled](state, action) {
      console.log(action);
      state.isLoading = false;
      state.foods = action.payload;
    },
  },
});

export const foodsReducer = foodsSlice.reducer;
