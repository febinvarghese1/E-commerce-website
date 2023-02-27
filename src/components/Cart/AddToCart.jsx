import React,{useContext,useEffect,useState} from "react";
import { IoMdBasket } from "react-icons/io";
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


  useEffect(()=>{
    setTimeout(()=>{
      setBtn(false);
    },3000) 
  },[btn])

  return (
    <div className="card__button">
      <button onClick={cartFunctionality}>
        {btn ? <span>Added!</span> : <span>Add to cart</span>}
        <i><IoMdBasket /></i>
      </button>
    </div>
  );
};

export default AddToCart;
