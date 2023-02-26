import React from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import heroImage from "../../../placeholder.png";
import AddToCart from "../Cart/AddToCart";

const Card = ({ product }) => {
  
  
  return (
      <div className="card">
        <NavLink to={`/product/${product.id}`}>
          <div className="card__image">
          <LazyLoadImage
              src={product?.image}
              width={200}
              height={200}
              placeholderSrc={heroImage}
            />
          </div>
          <div className="card__details">
            <h1>{product?.title?.slice(0, 35) + "...."}</h1>
            <section>
              <span>$ {product?.price}</span>
              <span>
                <AiFillStar />
                <i>{product?.rating?.rate}</i>
              </span>
            </section>
          </div>
        </NavLink>
        <AddToCart product={product} />
      </div>
  );
};

export default React.memo(Card);
