import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import productReducer from './reducers/productReducer';
import thunkMiddleware from 'redux-thunk';
import { RootState } from './types';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [thunkMiddleware],
});

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();