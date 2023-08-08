import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../features/counter/counterSlice';
import { reducers } from '../redux/reducers';

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      reducers:reducers,




      
  },
});
