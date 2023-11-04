import { createSlice } from "@reduxjs/toolkit";
import products from "../data";

const initialState={
  cart:[...products],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers: {
   increaseQuantity:(state,action)=>{
    const productId=action.payload;
    state.cart=state.cart.map((item)=>item.id===productId?{...item,quantity:item.quantity+1}:item);
   },
   decreaseQuantity:(state,action)=>{
    const productId=action.payload;
    state.cart=state.cart.map((item)=>item.id===productId?{...item,quantity:item.quantity-1}:item); 
   },

   removeProduct:(state,action)=>{
    const productId=action.payload;
    state.cart=state.cart.filter((item)=>item.id!==productId);
    },
    },

});

export const { increaseQuantity, decreaseQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;