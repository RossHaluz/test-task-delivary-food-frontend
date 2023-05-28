import { createSlice } from '@reduxjs/toolkit';
import {getOrder} from './operetions';

const initialState = {
  orderItems: [],
  totalPrice: 0,
  amountPrice: 0,
  successOrder: false,
  
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers:{
    [getOrder.fulfilled](state, __){
      state.successOrder = true;
      state.orderItems = []
    }
  },
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
          amountPrice: payload.amount * payload.price,
          totalPrice: state.totalPrice + state.amountPrice
        };
      }
    
      return {
        ...state,
        orderItems: [...state.orderItems, payload],
        totalPrice: state.totalPrice + payload.price,
        amountPrice: payload.amount * payload.price
      };

    },
    deleteItemInCart(state, action) {
      const { payload } = action;
      const index = state.orderItems.findIndex(
        item => item.id === payload
      );
    console.log(state.amountPrice);
      state.totalPrice = state.totalPrice - state.amountPrice
      state.orderItems.splice(index, 1);
    },
  },
});

export const { addItemToCart, deleteItemInCart, countTotalPrice } = orderSlice.actions;
export const orderReduser = orderSlice.reducer;
