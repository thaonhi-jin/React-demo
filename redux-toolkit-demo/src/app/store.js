import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import shoppingReducer from '../features/Shopping/ShoppingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoppingList: shoppingReducer
  },
});
