import React, { useState, useEffect } from "react";
import Card from "../Products/Card";
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
  const silderImages = [
    "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

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
    </div>
  );
};

export default HomeProduct;
