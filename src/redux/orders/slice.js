import { createSlice } from '@reduxjs/toolkit';
import { getOrder } from './operetions';

const initialState = {
  orderItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  amountItemPrice: 0,
  successOrder: false,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [getOrder.fulfilled](state, __) {
      state.successOrder = true;
      state.orderItems = [];
    },
  },
  reducers: {
    addItemToCart(state, action) {
      const findItem = state.orderItems.findIndex(
        item => item.id === action.payload.id
      );
      if (findItem >= 0) {
        state.orderItems[findItem].count += 1;
      } else {
        state.orderItems.push(action.payload);
      }
    },
    getCartTotal(state, __) {
      const { totalPrice, totalQuantity } = state.orderItems.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const itemTotal = price * count;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += count;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem(state, action) {
      console.log(action.payload);
      const index = state.orderItems.findIndex(
        item => item.id === action.payload
      );
      state.orderItems.splice(index, 1);
    },
    increaseItemQuantity(state, action) {
      state.orderItems.map(item => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count += 1) };
        }
        return item;
      });
    },
    dincreaseItemQuantity(state, action) {
      state.orderItems.map(item => {
        if (item.id === action.payload) {
          return { ...item, count: (item.count -= 1) };
        }
        return item;
      });
    },
  },
});

export const {
  addItemToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  dincreaseItemQuantity,
} = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
