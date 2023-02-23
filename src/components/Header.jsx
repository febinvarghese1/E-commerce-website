import React, { useContext, useEffect } from "react";
import { IoLogoPolymer } from "react-icons/io";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GlobalState } from "../context/GlobalContext";

const Header = () => {
  const { count } = useContext(GlobalState);

  return (
    <div className="header">
      <div className="header__left">
        <h1 className="header__left_heading">shopkart</h1>
        <i>
          <IoLogoPolymer />
        </i>
      </div>
      <div className="header__center">
        <ul className="header__center_list">
          <li>
            <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__right_container">
          <i>
            <AiOutlineFacebook />
          </i>
          <i>
            <AiOutlineTwitter />
          </i>
          <i>
            <AiOutlineInstagram />
          </i>
          <i className="cart--container">
            <NavLink to="/cart" style={{ color: "white" }}>
              <AiOutlineShoppingCart />
            </NavLink>

            {count > 0 && (
              <div className="cart--icon">
                <span>{count}</span>
              </div>
            )}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Header;
