import React from "react";
import { IoLogoPolymer } from "react-icons/io";
import {FaGooglePay,FaCcVisa,FaCcMastercard,FaPaypal} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top_items">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Electronics</span>
          <span>Jewelery</span>
          <span>New Arrivals</span>
        </div>
        <div className="footer__top_items">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
        </div>
        <div className="footer__top_items">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_left">
          <h1>ShopKart</h1>
          <i><IoLogoPolymer /></i>
        </div>
        <div className="footer__bottom_right">
            <i><FaGooglePay /></i>
           <i><FaPaypal /></i>
            <i><FaCcMastercard /></i>
            <i><FaCcVisa /></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
