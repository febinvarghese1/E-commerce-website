import React from "react";
import Header from "../pages/Header";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import FilteredCarts from "./FilteredCarts";

const Cart = () => {


  

  

  return (
    <div className="cart">
      <Header />
      <NavLink to="/products">
        <i className="cart--nav">
          <AiOutlineArrowLeft />
        </i>
      </NavLink>
      <FilteredCarts />
    </div>
  );
};

export default Cart;
