import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fooddelivery-y6s0.onrender.com';

export const getFoods = createAsyncThunk(
  'api/foods',
  async (currentPage, { rejectWithValue }) => {
    const {page} = currentPage
    try {
      const { data } = await axios.get(`/api/foods?page=${page}&limit=12`);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getFood = createAsyncThunk(
  'api/food',
  async (foodId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/foods/${foodId}`);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getFoodsCategory = createAsyncThunk(
  'api/foods-category',
  async (category, { rejectWithValue }) => {
    const {pageCategory: page, currentShop: shop} = category
    try {
      const { data } = await axios.get(
        `/api/foods-category?shop=${shop}&page=${page}&limit=12`
      );
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
