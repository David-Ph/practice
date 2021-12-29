import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const findItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!findItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const findItem = state.items.find((item) => item.id === id);
      if (findItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        findItem.quantity--;
        state.totalQuantity--;
        findItem.totalPrice -= findItem.price;
      }
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
