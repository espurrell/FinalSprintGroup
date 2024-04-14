import { render, screen } from '@testing-library/react';
import { ShopContext } from '../../Context/ShopContext';
import CartItems from './CartItems';

test('renders CartItems and displays correct information', () => {
  const mockContext = {
    getTotalCartAmount: jest.fn(),
    getTotalCartAmountTax: jest.fn(),
    getTotalCartAmountTaxed: jest.fn(),
    all_product: [{ id: 1, name: 'Test Product', price: 10 }],
    cartItems: { 1: 2 },
    removeFromCart: jest.fn(),
  };

  render(
    <ShopContext.Provider value={mockContext}>
      <CartItems />
    </ShopContext.Provider>
  );

  expect(screen.getByText('Products')).toBeInTheDocument();
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Price')).toBeInTheDocument();
  expect(screen.getByText('Quantity')).toBeInTheDocument();
  expect(screen.getByText('Total')).toBeInTheDocument();
  expect(screen.getByText('Remove')).toBeInTheDocument();
  expect(screen.getByText('Test Product')).toBeInTheDocument();
});