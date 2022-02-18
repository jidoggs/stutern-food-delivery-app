import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/reducers/reducerCart';

export const store = configureStore({
  reducer: {
    cartR: cartReducer
  },
});
