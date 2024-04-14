import { render, fireEvent } from '@testing-library/react';
import { ShopContext } from '../../Context/ShopContext';
import Quantitybtn from './Quantitybtn';

test('renders Quantitybtn and handles increment and decrement', () => {
  const mockContext = {
    cartItems: { 1: 1 },
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  };

  const { getByText } = render(
    <ShopContext.Provider value={mockContext}>
      <Quantitybtn itemId={1} />
    </ShopContext.Provider>
  );

  const decrementButton = getByText('remove');
  fireEvent.click(decrementButton);
  expect(mockContext.removeFromCart).toHaveBeenCalledWith(1);

});