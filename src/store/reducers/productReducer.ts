import { Product } from '@/types/product';
import { fetchProducts } from '@/utils/api';
import { createSlice, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { RootState } from '../types';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;

export const fetchProductsAsync = ():
  ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const products = await fetchProducts();
      dispatch(setProducts(products));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError('Error fetching products.'));
      dispatch(setLoading(false));
    }
  };
export default productSlice.reducer;