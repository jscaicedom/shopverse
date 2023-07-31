import { useSelector } from 'react-redux';
import { RootState } from '../types';

export const selectProductState = (state: RootState) => state.products;

export const useProductSelector = () => {
  const productState = useSelector(selectProductState);

  const { products, loading, error } = productState;

  return { products, loading, error };
};