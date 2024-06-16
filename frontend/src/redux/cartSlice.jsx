import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cartItems')) || {}, // stores items with ids as keys
  totalQuantity: JSON.parse(localStorage.getItem('totalQuantity')) || 0,
  totalAmount: JSON.parse(localStorage.getItem('totalAmount')) || 0
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('cartItems', JSON.stringify(state.items));
  localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity));
  localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount));
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items[item.id];
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += item.price;
      } else {
        state.items[item.id] = {
          ...item,
          quantity: 1,
          totalPrice: item.price
        };
      }
      state.totalQuantity++;
      state.totalAmount += item.price;

      saveToLocalStorage(state);
    },
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items[id];
      if (existingItem) {
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
        if (existingItem.quantity === 1) {
          delete state.items[id];
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      }

      saveToLocalStorage(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items[id];
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        delete state.items[id];
      }

      saveToLocalStorage(state);
    }
  }
});

export const { addToCart, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
