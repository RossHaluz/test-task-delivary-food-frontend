import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cartItem.push(action.payload);
    },
  },
});

export const { addItemToCart } = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
