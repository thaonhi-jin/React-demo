import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import shoppingReducer from '../features/Shopping/ShoppingSlice';
import PlanSlice from '../features/DailyPlan/PlanSlice';
import handleFormSlice from '../features/DailyPlan/handleFormSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoppingList: shoppingReducer,
    dailyplan: PlanSlice,
    handleForm: handleFormSlice
  },
});
