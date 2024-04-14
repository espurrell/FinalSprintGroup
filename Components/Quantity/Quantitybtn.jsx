import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "../Quantity/Quantitybtn.css";

const Quantitybtn = ({ itemId, minValue = 0, maxValue = 24 }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const [count, setCount] = useState(cartItems[itemId] || minValue);

  // function to handle incrementing the counter
  const handleIncCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
      addToCart(itemId);
    }
  };

  // function to handle the decrement counter
  // function to handle the decrement counter
  const handleDecCounter = () => {
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1); // Decrease the count by 1
      removeFromCart(itemId); // Remove the item from the cart
    }
  };

  return (
    <div className="btn-group">
      <button className="decrement-btn" onClick={handleDecCounter}>
        <span className="material-symbols-outlined">remove</span>
      </button>

      <p className="pcount">{count}</p>

      <button className="increment-btn" onClick={handleIncCounter}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default Quantitybtn;
