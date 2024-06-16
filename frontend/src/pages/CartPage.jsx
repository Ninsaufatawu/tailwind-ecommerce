import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decrementItem, removeItem } from '../redux/cartSlice';

function CartPage() {
  const items = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {totalQuantity === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {Object.values(items).map(item => (
            <li key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1em 0' }}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price ? item.price.toFixed(2) : '0.00'}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.totalPrice ? item.totalPrice.toFixed(2) : '0.00'}</p>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Amount: ${totalAmount ? totalAmount.toFixed(2) : '0.00'}</h3>
    </div>
  );
}

export default CartPage;
