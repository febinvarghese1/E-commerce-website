import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { GlobalState } from "../../context/GlobalContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductInput from "./ProductInput";

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
  console.log(products);

  useEffect(() => {
    fetchApi();
  }, [category]);

  const visibleHandler = () => {
    setBtn(!btn);
    setVisible((prev) => (prev === 3 ? prev * 6 : 3));
  };

  const sortFunction = (a, b) => {
    if (order == "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  };

  return (
    <>
    <div className="productList">
      <div className="productList__container">
  
        
        {loading ? (
          <div className="loading">
            <AiOutlineLoading3Quarters className="loading-animation" />
          </div>
        ) : (
          <section className="productList__container_right">
           <ProductInput setSearchInput={setSearchInput}/>
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
                ?.sort((a, b) => {
                  return sortFunction(a, b);
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
    </div>
    </>
  );
};

export default React.memo(ProductList);
