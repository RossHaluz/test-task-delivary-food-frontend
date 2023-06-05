import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://fooddelivery-y6s0.onrender.com';

export const getOrder = createAsyncThunk(
  'food/getOrder',
  async (dataOrder, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/food-order', dataOrder);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
