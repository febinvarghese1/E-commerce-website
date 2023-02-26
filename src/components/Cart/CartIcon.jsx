import React, { useContext } from "react";
import { GlobalState } from "../../context/GlobalContext";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
const CartIcon = () => {
  const { count } = useContext(GlobalState);

  return (
    <>
      <i className="cart--container">
        <NavLink to="/cart" style={{ color: "white" }}>
          <AiOutlineShoppingCart />
        </NavLink>

        {count > 0 && (
          <div className="cart--icon">
            {" "}
            <span>{count}</span>
          </div>
        )}
      </i>
    </>
  );
};

export default CartIcon;
