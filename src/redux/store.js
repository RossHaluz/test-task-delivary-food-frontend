import { configureStore } from '@reduxjs/toolkit';
import { foodsReducer } from './foods/slice';
import { orderReduser } from './orders/slice';

export const store = configureStore({
  reducer: {
    food: foodsReducer,
    cart: orderReduser,
  },
});
