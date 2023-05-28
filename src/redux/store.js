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

const persistConfig = {
  key: 'orders',
  storage,
  whitelist: ['orderItems', 'totalPrice'],
};

export const store = configureStore({
  reducer: {
    food: foodsReducer,
    cart: persistReducer(persistConfig, orderReduser),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
