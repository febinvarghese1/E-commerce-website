import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ContextProvider, GlobalState } from "../context/GlobalContext";

const Card = ({ product }) => {
  const { addCartItems } = useContext(GlobalState);
  const [btn, setBtn] = useState(false);

  const cartFunctionality = () => {
    setBtn(true);
    if(!btn) {
      return addCartItems(product.id, product);
  }};

  return (
    <ContextProvider>
      <div className="card">
        <NavLink to={`/product/${product.id}`}>
          <div className="card__image">
            <img src={product?.image} />
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
        <div className="card__button">
          <button onClick={cartFunctionality}>
            {btn ? <span>Added!</span> : <span>Add to cart</span>}
          </button>
          <button>buy now</button>
        </div>
      </div>
    </ContextProvider>
  );
};

export default Card;
