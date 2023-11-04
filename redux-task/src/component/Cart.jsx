import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';
import "../styles/cart.css";
import {increaseQuantity,decreaseQuantity,removeProduct} from './cartSlice';

const Cart=()=>{
  const cart=useSelector((state)=>state.cart.cart);
  const dispatch=useDispatch();

  const handleIncrease=(productId)=>{
    console.log("...increase");
    dispatch(increaseQuantity(productId));
   };

   const handleDecrease=(productId)=>{
    console.log("...decrease");
    dispatch(decreaseQuantity(productId));
   };

   const handleRemove=(productId)=>{
    console.log("...remove");
    dispatch(removeProduct(productId));
   };
  
  //  const getTotalPrice=()=>{
  //   let totalPrice=0;
  //   cart.forEach((item)=>{
  //     totalPrice+=item.price * item.quantity;
  //   });
  //   return totalPrice;
  //  };

  const [price, setPrice] = useState(0);
   const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.quantity * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
       
      <h2>My Cart Page</h2>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.thumbnail} alt="" />
            </div>
            <div  style={{ textAlign: 'left'}}>
            <h4>{item.title}</h4>
            <br/>
            <h4>{item.brand}</h4>
            
            <p >{item.description}</p>
            <br/>
            <h4>{item.category}</h4>             
          </div>
          <div style={{ textAlign: 'right'}} >
            <button onClick={() => handleIncrease(item.id)}>+</button>
            <button>{item.quantity}</button>
            <button onClick={() => handleDecrease(item.id)}>-</button>&nbsp;&nbsp;&nbsp;
            <span>$ {item.quantity*item.price}</span>
          </div>
          <div style={{ textAlign: 'right'}}>
            
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Shipping:</span>
        <span>FREE</span>
      </div>
      <div className="total">
        <span>Total Price  </span>
        <span>$ {price}</span>
      </div>
    </article>
  );
};

export default Cart;