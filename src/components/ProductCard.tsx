import { Product } from '@/types/product';
import React from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-blue-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="mb-2">Rating: {product.rating}</p>
    </div>
  );
};

export default ProductCard;