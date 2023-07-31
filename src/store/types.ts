import { Product } from "@/types/product";

export interface RootState {
  products: {
    products: Product[];
    loading: boolean;
    error: string | null;
  };
}