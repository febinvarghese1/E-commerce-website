import { createContext, useState } from "react";

export const GlobalState = createContext(null);

export const ContextProvider = ({ children }) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState(1000);
  const [order,setOrder] = useState("");
  const [range,setRange] = useState(200);
  const [totalPrice,setTotalPrice] = useState(0);

  const addCartItems = (id, product) => {
    setCount((prev) => prev + 1);
    setFilteredProduct([...filteredProduct, product]);
  };

  const deleteCartItems = (id, product) => {
    const filtered = filteredProduct.filter((item) => {
      return item.id !== product.id;
    });
    setCount((prev) => prev - 1);

    setFilteredProduct(filtered);
  };


  const setTotalFunc = (price, cart, operation) =>{
    operation == 'add' ?  setTotalPrice(prev => prev + (price)) : setTotalPrice(prev => prev - (price));
  }
  


  const contextValue = {
    count,
    addCartItems,
    deleteCartItems,
    filteredProduct,
    category,
    setCategory,
    filterPrice,
    setFilterPrice,
    order,
    setOrder,
    range,
    setRange,
    totalPrice,
    setTotalPrice,
    setTotalFunc
  };

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  );
};
