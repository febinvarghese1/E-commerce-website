import { createContext, useCallback, useState } from "react";

export const GlobalState = createContext(null);

export const ContextProvider = ({ children }) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState(1000);
  const [order, setOrder] = useState("");
  const [range, setRange] = useState(200);

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

  const handleCheckHandler = (e) => {
    let value = e.target.value;
    setCategory(value);
  };
  const checkFilterPrice = (e) => {
    if (e.target.checked) {
      setFilterPrice(e.target.value);
    }
  };
  const setOrderFunc = (e) => {
    setOrder(e.target.value);
  };

  const getCount = useCallback(() => {
    return count;
  }, [count]);


const setRangeFunc = (e) =>{
  setFilterPrice(range);
  setRange(e.target.value);
}

 

  const contextValue = {
    count,
    addCartItems,
    deleteCartItems,
    filteredProduct,
    category,
    setCategory,
    filterPrice,
    checkFilterPrice,
    order,
    setOrder,
    range,
    setOrderFunc,
    handleCheckHandler,
    setRange,
    getCount,
    setRangeFunc
  };

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  );
};
