import React, { useContext, useEffect } from "react";
import { IoLogoPolymer } from "react-icons/io";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import CartIcon from "../Cart/CartIcon";

const Header = () => {

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
              to="/add"
              style={{ textDecoration: "none", color: "white" }}
            >
              Add
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

          <CartIcon />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
