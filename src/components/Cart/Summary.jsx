import React, { useEffect, useState } from "react";

const Summary = ({totalPrice}) => {

  const [discount,setDiscount] = useState(totalPrice);
  const [savings,setSavings] = useState(0);

  const calculateDiscount = () =>{
    const value = Math.abs(((totalPrice+20)*((100-10)/100)).toFixed(2));
    setDiscount(value);
  }
  const calculateSavings = () =>{
    const value = Math.abs((totalPrice-(totalPrice+20)*((100-10)/100)).toFixed(2));
    setSavings(value);
  }


  useEffect(()=>{
calculateDiscount();
calculateSavings();
  },[totalPrice])

  return (
    <div className="summary">
      <div className="summary__top">
        <h1>Order summary</h1>
      </div>
      <div className="summary__center">
          <div><h3>subtotal:    </h3><span> ${Math.abs(totalPrice).toFixed(2)}</span></div>
          <div><h3>Tax:  </h3><span> $20</span></div>
          <div><h3>Discount: </h3><span>$10</span></div>
          <div><h3>Estimated Total:</h3> <span>{discount}</span></div>
        <p>Your total savings on this order is {savings}</p>
      </div>
      <div className="summary__bottom">
        <button>checkout</button>
      
     
      </div>
    </div>
  );
};

export default Summary;
