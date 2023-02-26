import React,{useContext,useState} from "react";
import { GlobalState } from "../../context/GlobalContext";

const AddToCart = ({product}) => {
  const { addCartItems } = useContext(GlobalState);
  const cartFunctionality = () => {
    toggleBtn();
    if (!btn) {
      return addCartItems(product.id, product);
    }
  };
  const [btn, setBtn] = useState(false);
  const toggleBtn = () => {
    setBtn(true);
  };

  return (
    <div className="card__button">
      <button onClick={cartFunctionality}>
        {btn ? <span>Added!</span> : <span>Add to cart</span>}
      </button>
      <button>buy now</button>
    </div>
  );
};

export default AddToCart;
