import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export const Offers = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10.99, text: "jgsljah.aslkvs sa;khgalkjfbsdgjkshgsdf sajlghssalds jlhshdlgsafghs" },
    { id: 2, name: 'Item 2', price: 14.99, text: "jgsljah.aslkvs sa;khgalkjfbsdgjkshgsdf sajlghssalds jlhshdlgsafghs" },
    { id: 3, name: 'Item 3', price: 10.99, text: "jgsljah.aslkvs sa;khgalkjfbsdgjkshgsdf sajlghssalds jlhshdlgsafghs" },
    { id: 4, name: 'Item 4', price: 14.99, text: "jgsljah.aslkvs sa;khgalkjfbsdgjkshgsdf sajlghssalds jlhshdlgsafghs" },
  ];

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className='container mx-auto p-3 max-w-screen-xl'>
      <div className='flex overflow-x-auto space-x-4'>
        <h1>E-commerce Store</h1>
        {items.map((item, index) => (
          <div key={index} className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 p-2 hover:bg-red-400 hover:rounded-lg">
            <div className="border border-gray-300 p-4 rounded-lg hover:bg-red-400 hover:rounded-lg hover:border-none">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>{item.text}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
