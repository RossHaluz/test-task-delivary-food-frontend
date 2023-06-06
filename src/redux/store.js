import { configureStore } from '@reduxjs/toolkit';
import { foodsReducer } from './foods/slice';
import { orderReduser } from './orders/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from './auth/slice';

const persistConfig = {
  key: 'orders',
  storage,
  whitelist: ['orderItems', 'totalPrice'],
};
const persistAuth = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    food: foodsReducer,
    cart: persistReducer(persistConfig, orderReduser),
    auth: persistReducer(persistAuth, authReducers),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
