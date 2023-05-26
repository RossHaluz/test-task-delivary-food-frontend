import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrder = createAsyncThunk(
  'food/getOrder',
  async (dataOrder, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/food-order', dataOrder);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
