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
    deleteItemInCart(state, action) {
      const index = state.cartItem.findIndex(
        item => item.id === action.payload
      );
      state.cartItem.splice(index, 1);
    },
  },
  extraReducers: {
    
  }
});

export const { addItemToCart, deleteItemInCart } = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
