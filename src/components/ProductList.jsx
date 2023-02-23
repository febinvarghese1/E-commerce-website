import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Card from "./Card";
import { IoMdSearch } from "react-icons/io";
import { GlobalState } from "../context/GlobalContext";
import Footer from "./Footer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const ProductList = () => {
  const [visible, setVisible] = useState(3);
  const [btn, setBtn] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);

  const { category, filterPrice, order } = useContext(GlobalState);

  const [products, setProducts] = useState([]);
  console.log(order);
  const fetchApi = async () => {
        setLoading(true);

    const response =
      category.length > 0
        ? await fetch(`https://fakestoreapi.com/products/category/${category}`)
        : await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    setProducts(data);
        setLoading(false);

  };

  useEffect(() => {
    fetchApi();
  }, [category]);

  const visibleHandler = () => {
    setBtn(!btn);
    setVisible((prev) => (prev === 3 ? prev * 6 : 3));
  };

  const sortFunction = (a,b) =>{
    if(order == "asc"){
      return a.price - b.price;
    }else{
      return b.price - a.price;
    }
  }


  return (
    <div className="productList">
      <Header />
      <div className="productList__container">
        <div className="productList__container_left">
          <Sidebar />
        </div>
      {loading ? (
        <div className="loading">
       <AiOutlineLoading3Quarters className="loading-animation" />
        </div>
      ) :(
      
        <section className="productList__container_right">
          <div className="productList__container_right--input">
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search ..."
            />
            <IoMdSearch />
          </div>
          <div className="productList__container_right--contain">
            {products
              ?.filter((item) => {
                return searchInput.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchInput);
              })
              ?.filter((value) => {
                return value.price < filterPrice;
              })
              ?.sort((a,b)=>{
                return sortFunction(a,b);
              })
              ?.slice(0, visible)
              
              ?.map((product) => (
                
                <Card key={product.id} product={product} />
              ))}
          </div>
          <div className="productList__btn">
            <button onClick={visibleHandler}>
              {btn ? <span>show less</span> : <span>show more</span>}
            </button>
          </div>
        </section>
      )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
