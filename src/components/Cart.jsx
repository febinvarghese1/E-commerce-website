import React, { useContext, useState} from "react";
import Header from "./Header";
import { GlobalState } from "../context/GlobalContext";
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai";
import { IoMdGitCompare } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SingleCart from "./SingleCart";

const Cart = () => {
  const { filteredProduct, totalPrice } = useContext(GlobalState);


  

  
  console.log("total" + totalPrice);

  return (
    <div className="cart">
      <Header />
      <NavLink to="/products">
        <i className="cart--nav">
          <AiOutlineArrowLeft />
        </i>
      </NavLink>
      {filteredProduct.length > 0 ? (
        <div className="cart__contain">
          {filteredProduct.map((product) => (
            <SingleCart key={product.id} price = {product.price}  product={product}/>
          ))}
          <div className="cart__contain_card_details_items--btn cart__contain_card_details_items--btn--checkout">
          <h1>Total Amount: <span>$ {Math.abs(totalPrice.toFixed(2))}</span></h1> <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1 className="cart--error">There is no item in the cart</h1>
      )}
    </div>
  );
};

export default Cart;
