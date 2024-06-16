import React from 'react';
import { useSelector } from 'react-redux';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Cart() {
  const itemCount = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="relative">
      <Link to="/cart" className="relative inline-block">
        <IoCartOutline size="1.5em" className=" translate-y-1/4" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3 bg-red-700 text-white rounded-full py-0.5 px-1.5 text-xs flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Cart;

