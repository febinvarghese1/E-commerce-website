import React, { useState, useContext } from "react";
import { GlobalState } from "../context/GlobalContext";
import { IoLogoPolymer } from "react-icons/io";

const Sidebar = () => {
  const {  setCategory } = useContext(GlobalState);
  const {filterPrice,setFilterPrice,setOrder,range,setRange} = useContext(GlobalState)
  const handleCheckHandler = (e) => {
    let value = e.target.value;
    setCategory(value);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <IoLogoPolymer />
      </div>
      <div className="sidebar__center">
        <div className="sidebar__center_discount">
          <h3>Category</h3>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="men's clothing"
              value="men's clothing"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="men's clothing">Mens clothing</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="women's clothing"
              value="women's clothing"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="women's clothing">Women clothing</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="jewelery"
              value="jewelery"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="jewelery">Jewlery</label>
          </div>
          <div className="sidebar__center_discount_items">
            <input
              type="radio"
              id="electronics"
              value="electronics"
              name="category"
              onChange={handleCheckHandler}
            />
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
        <div className="sidebar__center_filter">
          <h3>Filters</h3>
          <section>
            <input type="checkbox" id="20"  value="20" onChange={e => e.target.checked && setFilterPrice(e.target.value)}/>
            <label htmlFor="20">Under 20</label>
          </section>
          <section>
            <input type="checkbox" id="50"  value="50" onChange={e => e.target.checked && setFilterPrice(e.target.value)}/>
            <label htmlFor="50">Under 50</label>
          </section>
          <section>
            <input type="checkbox" id="100" value="100" onChange={e => e.target.checked && setFilterPrice(e.target.value)} />
            <label htmlFor="100">Under 100</label>
          </section>
          <section>
            <input type="checkbox" id="200" value="200" onChange={e => e.target.checked && setFilterPrice(e.target.value)}/>
            <label htmlFor="200">Under 200</label>
          </section>
        </div>

        <div className="sidebar__center_price">
          <h3>Filters the prices</h3>
          <section>
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setOrder(e.target.value)} />
            <label htmlFor="asc">Price Low to High</label>
          </section>
          <section>
            <input type="radio" id="dsc" value="dsc" name="price" onChange={e => setOrder(e.target.value)}/>
            <label htmlFor="dsc">Price High to Low</label>
          </section>
        </div>

        <div className="sidebar__center_range">
          <h3>Select the range</h3>
          <section>
            <label>0</label>
            <input type="range" list="values" min={0} step={10} max={200} onChange={e=> {
              setFilterPrice(range)
              return setRange(e.target.value)
            }
             } />
            <label>{range}</label>
          </section>
        </div>
      </div>
      {/* <div className="sidebar__bottom">
        <button>Apply filters</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
