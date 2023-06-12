import { createSlice } from '@reduxjs/toolkit';
import { getFoods, getFood, getFoodsCategory } from './operetions';

const foodsSlice = createSlice({
  name: 'food',
  initialState: {
    foods: [],
    currentFood: null,
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
    [getFood.pending](state, __) {
      state.isLoading = true;
    },
    [getFood.fulfilled](state, action) {
      state.currentFood = action.payload;
      state.isLoading = false;
    },
    [getFoodsCategory.fulfilled](state, action) {
      console.log(action.payload);
      state.foods = action.payload;
    },
  },
});

export const foodsReducer = foodsSlice.reducer;
