import { createContext, useState } from "react";

export const GlobalState = createContext(null);

export const ContextProvider = ({ children }) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("");
  const [filterPrice, setFilterPrice] = useState(1000);
  const [order, setOrder] = useState("");
  const [range, setRange] = useState(200);
  const [total, setTotal] = useState(0);

  //this function is used to add the cart items from overall pages

  const addCartItems = (id, product) => {
    setCount((prev) => prev + 1);
    setFilteredProduct([...filteredProduct, product]);
  };

  //this function is used to delete the cart items from the single cart
  const deleteCartItems = (id, product) => {
    const filtered = filteredProduct.filter((item) => {
      return item.id !== product.id;
    });
    setCount((prev) => prev - 1);

    setFilteredProduct(filtered);
  };

  //this function is used to check which category is used
  const handleCheckHandler = (e) => {
    let value = e.target.value;
    setCategory(value);
  };

  //this function is used to check the price which is filtered
  const checkFilterPrice = (e) => {
    if (e.target.checked) {
      setFilterPrice(e.target.value);
    }
  };

  //this function is used to get the order from the sidebar
  const setOrderFunc = (e) => {
    setOrder(e.target.value);
  };

  //this function is used to get the count of the cart
  const getCount = () => {
    return count;
  };

  //this function is used to get the range from the sidebar

  const setRangeFunc = (e) => {
    //setting the filter price from the range
    setFilterPrice(range);
    setRange(e.target.value);
  };

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
    setRangeFunc,
    total,
    setTotal,
  };

  return (
    <GlobalState.Provider value={contextValue}>{children}</GlobalState.Provider>
  );
};
