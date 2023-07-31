import { addToCart } from '@/store/reducers/cartReducer';
import { useAppDispatch } from '@/store/store';
import { Product } from '@/types/product';
import React from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="border border-gray-300 p-4 rounded">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;