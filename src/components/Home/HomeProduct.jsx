import React, { useState, useEffect } from "react";
import Card from "../Products/Card";
import Flex from "./Flex";
import Floating from "./Floating";
import Slider from "./Slider";
const HomeProduct = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setTrendingProducts(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
 

  return (
    <div className="homeproduct">
      <div className="homeproduct__trending">
        <h1>Trending</h1>
        <section className="homeproduct__trending--contain">
          <div className="homeproduct__trending_items">
            {trendingProducts.splice(3, 5).map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>

      <Floating />

      <div className="homeproduct__today">
        <h1>Deals Today</h1>
        <section className="homeproduct__today--contain">
          <div className="homeproduct__today_items">
            {trendingProducts.splice(10, 14).map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </section>
      </div>
      <h1 className="homeproduct__heading">Popular on shopkart</h1>
      <Flex />
    </div>
  );
};

export default HomeProduct;
