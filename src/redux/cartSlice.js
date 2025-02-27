import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "shoppyGlobe",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          console.warn("Quantity already at minimum");
        }
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
