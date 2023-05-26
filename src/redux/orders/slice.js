import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [],
  totalPrice: 0,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { payload } = action;
      const item = state.orderItems.find(
        product => product.id === payload.id,
      );
    
      if (item) {
        return {
          ...state,
          orderItems: state.orderItems.map(item => item.id === payload.id
            ? {
              ...item,
              amount: item.amount + 1,
            }
            : item
          ),
          totalPrice: state.totalPrice + payload.price,
        };
      }
    
      return {
        ...state,
        orderItems: [...state.orderItems, payload],
        totalPrice: state.totalPrice + payload.price,
      };

    },
    deleteItemInCart(state, action) {
      const index = state.orderItems.findIndex(
        item => item.id === action.payload
      );
      state.orderItems.splice(index, 1);
    },
  },
});

export const { addItemToCart, deleteItemInCart, countTotalPrice } = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
