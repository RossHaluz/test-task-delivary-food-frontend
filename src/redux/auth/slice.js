import { createSlice } from '@reduxjs/toolkit';
import { register, login, currentUser, logout, editUser } from './operetions';

const initialState = {
  user: { name: null, email: null },
  avatar: null,
  token: null,
  isLoading: false,
  isLoging: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, __) {
      state.isLoading = true;
    },
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoging = true;
      state.isRefreshing = true;
    },
    [login.pending](state, __) {
      state.isLoading = true;
    },
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoging = true;
      state.token = action.payload.user.token;
      state.isRefreshing = true;
      state.user = action.payload.user;
    },
    [currentUser.fulfilled](state, action) {
      console.log(action.payload);
      state.user = action.payload;
      state.isLoging = true;
      state.token = action.payload.token;
      state.isRefreshing = true;
    },
    [currentUser.rejected](state, __) {
      state.isLoging = false;
      state.isRefreshing = false;
    },
    [logout.fulfilled](state, __) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoging = false;
      state.isRefreshing = false;
    },
    [editUser.fulfilled](state, {payload}) {
      const updateField = payload
      state.user = {
        ...state.user,
        ...updateField
      }
      state.token = payload.token;
    },
  },
});

export const authReducers = authSlice.reducer;
