import React from "react";
import Header from "./Header";
import bg from "../../IMG-4.jpg";
import Slider from "./Slider";
import HomeProduct from "./HomeProduct";
import Footer from "./Footer";
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
