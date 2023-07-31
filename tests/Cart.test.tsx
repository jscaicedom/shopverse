import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from '@/components/Cart';
import { useDispatch } from 'react-redux';
import { removeFromCart, clearCart, CartItem } from '@/store/reducers/cartReducer';

jest.mock('react-redux'); 

const mockItems: CartItem[] = [
  {
    product: {
      id: 1, title: 'Product 1',
      description: 'This is a product description.',
      price: 99.99,
      currency: 'USD',
      rating: 4.5,
      image: 'product1.jpg',
    },
    quantity: 2,
  },
  {
    product: {
      id: 2, title: 'Product 2',
      description: 'This is a product description.',
      price: 99.99,
      currency: 'USD',
      rating: 4.5,
      image: 'product1.jpg',
    },
    quantity: 1,
  },
];

const mockTotalItems = 3;
const mockTotalPrice = 64.97;

test('renders Cart component correctly', () => {
  render(<Cart />);

  const cartButton = screen.getByText('Cart (3)');
  expect(cartButton).toBeInTheDocument();

  expect(screen.queryByText('Shopping Cart')).not.toBeInTheDocument();
});

test('opens Cart modal when "Cart" button is clicked', () => {
  render(<Cart />);
  const cartButton = screen.getByText('Cart (3)');

  fireEvent.click(cartButton);

  const cartModal = screen.getByText('Shopping Cart');
  expect(cartModal).toBeInTheDocument();
});

test('displays cart items and total price correctly', () => {
  render(<Cart />);
  const cartButton = screen.getByText('Cart (3)');

  fireEvent.click(cartButton);

  const product1 = screen.getByText('Product 1');
  expect(product1).toBeInTheDocument();

  const product2 = screen.getByText('Product 2');
  expect(product2).toBeInTheDocument();

  const totalItems = screen.getByText(`Total Items: ${mockTotalItems}`);
  expect(totalItems).toBeInTheDocument();

  const totalPrice = screen.getByText(`Total Price: $${mockTotalPrice.toFixed(2)}`);
  expect(totalPrice).toBeInTheDocument();
});

test('displays "Your cart is empty." message when there are no items', () => {
  const mockDispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValueOnce(mockDispatch);

  render(<Cart />);
  const cartButton = screen.getByText('Cart (0)');

  fireEvent.click(cartButton);

  const emptyCartMessage = screen.getByText('Your cart is empty.');
  expect(emptyCartMessage).toBeInTheDocument();
});

test('removes item from cart when "Remove" button is clicked', () => {
  const mockDispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValueOnce(mockDispatch);
  render(<Cart />);
  const cartButton = screen.getByText('Cart (3)');

  fireEvent.click(cartButton);

  const removeButton1 = screen.getByText('Remove');
  expect(removeButton1).toBeInTheDocument();

  fireEvent.click(removeButton1);

  expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(1));
});

test('clears the cart when "Clear Cart" button is clicked', () => {
  const mockDispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValueOnce(mockDispatch);

  render(<Cart />);
  const cartButton = screen.getByText('Cart (3)');

  fireEvent.click(cartButton);

  const clearCartButton = screen.getByText('Clear Cart');
  expect(clearCartButton).toBeInTheDocument();

  fireEvent.click(clearCartButton);

  expect(mockDispatch).toHaveBeenCalledWith(clearCart());
});


