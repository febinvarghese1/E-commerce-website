import React from "react";
import Header from "../pages/Header";
import Slider from "./Slider";
import HomeProduct from "./HomeProduct";
import Footer from "../pages/Footer";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__container">
        {/* <div className="home__container--img">
          <img src={bg} />
        </div> */}
        <div className="home__container_left">
          <h1>
            Find <span>your</span> style
          </h1>
          <h3>Fashion up your look</h3>
        </div>
        <Slider />
        <HomeProduct />


        
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
