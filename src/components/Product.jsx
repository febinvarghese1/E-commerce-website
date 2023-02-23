import React, { useEffect, useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImage from "../../placeholder.png";
import Header from "./Header";
import { GlobalState } from "../context/GlobalContext";
import { IoMdArrowDropleft } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Product = () => {
  const { addCartItems } = useContext(GlobalState);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  
  const fetchSingleData = async (id) => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleData(id);
   
  }, []);

  return (
    <div className="product">
      <Header />
      <NavLink to="/products">
        <i className="product--nav">
          <IoMdArrowDropleft />
        </i>
      </NavLink>
      {loading ? (
        <div className="loading">
       <AiOutlineLoading3Quarters className="loading-animation" />
        </div>
      ) : (
        <div className="product__wrapper">
          <div className="product__left">
            <LazyLoadImage
              src={product.image}
              width={500}
              height={500}
              placeholderSrc={heroImage}
            />
          </div>
          <div className="product__right">
            <div className="product__right_top">
              <h1>{product.title}</h1>
              <section>
                <h3>About This Item:</h3>
                <p>{product.description}</p>
              </section>
              <div className="product__right_top_size">
                {product.category?.includes("clothing") && (
                  <>
                    <label htmlFor="size">select the size</label>
                    <select name="size">
                      <option value="s">S</option>
                      <option value="m">M</option>
                      <option value="l">L</option>
                      <option value="xl">XL</option>
                      <option value="xxl">XXL</option>
                    </select>
                  </>
                )}
              </div>
            </div>
            <div className="product__right_center">
              <span>Category: {product.category}</span>
              <p>price: ${product.price}</p>
            </div>
            <div className="product__right_bottom">
              <button onClick={() => addCartItems(product.id, product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// 
export default Product;
