import React from "react";
import Header from "../pages/Header";
import Slider from "./Slider";
import HomeProduct from "./HomeProduct";
import Footer from "../pages/Footer";
import bg from "../../../img-bg.jpg"
import { FaArrowAltCircleUp } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
        <div className="home--img">
          <img src={bg} />
        </div>
      <Header />
      <div className="home__container">
        <div className="home__container_left">
          <h1>Fashion for everyone</h1>
          <p>Shopkart provides everyone the type of fashion which they are looking for, there are variety of products which match the users satisfaction and needs for the user.</p>
        <div className="home__container_left_btn">
          <button>
            Join Now <AiOutlineArrowRight />
          </button>
          
          <button>
          <NavLink to="/products" style={{color:"white"}}>
            Browse
            </NavLink>
          </button>
        </div>
        </div>
        {/* <Slider /> */}
        <HomeProduct />


        
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
