import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../context/GlobalContext";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdGitCompare } from "react-icons/io";
const SingleCart = ({ product }) => {
  const { setTotalPrice, deleteCartItems, setTotalFunc } =
    useContext(GlobalState);
  const [cartVal, setCartVal] = useState(1);

  useEffect(() => {
    setTotalFunc(product.price, cartVal, "add");
  }, []);

  return (
    <div key={product.id} className="cart__contain_card">
      <div className="cart__contain_card_img">
        <img src={product.image} />
      </div>
      <div className="cart__contain_card_details">
        <section className="cart__contain_card_details_items">
          <h2>{product.title}</h2>
          <h4>$ {(product.price * cartVal).toFixed(1)}</h4>
        </section>
        <section className="cart__contain_card_details_items cart__contain_card_details_items--button">
          <button
            onClick={() => {
              if (cartVal !== 0) {
                setTotalFunc(product.price, cartVal, "less");
              }
              return setCartVal((prev) => (prev > 0 ? prev - 1 : 0));
            }}
          >
            -
          </button>
          <span>{cartVal}</span>
          <button
            onClick={() => {
              if (cartVal !== 10) {
                setTotalFunc(product.price, cartVal, "add");
              }

              return setCartVal((prev) => (prev < 10 ? prev + 1 : prev));
            }}
          >
            +
          </button>
        </section>
        <section className="cart__contain_card_details_items cart__contain_card_details_items--flex">
          <div>
            <i>
              <AiOutlineHeart />
            </i>
            <span>Add to wishlist</span>
          </div>
          <div>
            <i>
              <IoMdGitCompare />
            </i>
            <span>Add to compare</span>
          </div>
        </section>
        <section className="cart__contain_card_details_items">
          <h3>Category: {product.category}</h3>
        </section>
        <section className="cart__contain_card_details_items">
          <h3>Description</h3>
          <p>{product.description.slice(0, 250) + " ..."}</p>
        </section>
        <section className="cart__contain_card_details_items cart__contain_card_details_items--btn">
          <button onClick={() => deleteCartItems(product.id, product)}>
            remove from cart
          </button>
        </section>
      </div>
    </div>
  );
};

export default SingleCart;
