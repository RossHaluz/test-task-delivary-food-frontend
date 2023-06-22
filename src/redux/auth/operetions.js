import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://fooddelivery-y6s0.onrender.com';

const setAuthHeaderToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeHeaderToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', userData);
      setAuthHeaderToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', userData);
      console.log(data);
      setAuthHeaderToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/current',
  async (__, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) {
      return rejectWithValue();
    }
    setAuthHeaderToken(token);
    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (__, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      removeHeaderToken();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/editUser',
  async (updateUser, { rejectWithValue }) => {
    try {
      const { data } = await axios.put('/auth/user-edit', updateUser);
      setAuthHeaderToken(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);