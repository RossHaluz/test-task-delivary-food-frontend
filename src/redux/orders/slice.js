import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
  count: 0,
  cartTotalAmount: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.orderItems.push(action.payload);
    },
    deleteItemInCart(state, action) {
      const index = state.orderItems.findIndex(
        item => item.id === action.payload
      );
      state.orderItems.splice(index, 1);
    },
  },
});

export const { addItemToCart, deleteItemInCart } = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
