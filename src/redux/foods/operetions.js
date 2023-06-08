import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fooddelivery-y6s0.onrender.com';

export const getFoods = createAsyncThunk(
  'api/foods',
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/foods');
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
