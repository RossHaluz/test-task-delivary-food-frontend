import { createSlice } from '@reduxjs/toolkit';
import { getFoods, getFood, getFoodsCategory } from './operetions';

const foodsSlice = createSlice({
  name: 'food',
  initialState: {
    foods: [],
    currentFood: null,
    currentShop: '',
    isLoading: false,
    totalPage: 0,
    currentPage: 1,
    currentPageCategory: 1,
    pageQtyCategory: 0,
  },
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    changeCurrentPageCategory(state, action) {
      state.currentPageCategory = action.payload;
    },
    setShopName(state, action) {
      state.currentShop = action.payload;
    },
  },
  extraReducers: {
    [getFoods.pending](state, __) {
      state.isLoading = true;
    },
    [getFoods.fulfilled](state, action) {
      state.isLoading = false;
      state.foods = action.payload;
      state.totalPage = action.payload.meta.totalPage;
      state.currentPage = action.payload.meta.currentPage;
      state.currentShop = '';
    },
    [getFood.pending](state, __) {
      state.isLoading = true;
    },
    [getFood.fulfilled](state, action) {
      state.currentFood = action.payload;
      state.isLoading = false;
    },
    [getFoodsCategory.fulfilled](state, action) {
      state.foods = action.payload;
      state.currentPageCategory = action.payload.meta.currentPage;
      state.pageQtyCategory = action.payload.meta.totalPage;
      state.currentPage = 1;
      state.totalPage = 0;
    },
  },
});

export const { changeCurrentPage, setShopName, changeCurrentPageCategory } =
  foodsSlice.actions;
export const foodsReducer = foodsSlice.reducer;
