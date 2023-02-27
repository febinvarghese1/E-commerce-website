import React, {  useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FormComp from "./FormComp";
import Header from "../pages/Header";

const AddProduct = () => {

  const [modal, setModal] = useState(false);
  
  useEffect(() => {
    if (modal == true) {
      setTimeout(() => {
        setModal(false);
      }, 3000);
    }
  }, [modal]);

  

 
  

  return (
    <>
      <Header />
      <div className="addproduct">
        <NavLink to="/">
          <i className="addproduct--nav">
            <AiOutlineLeft />
          </i>
        </NavLink>
        <div className="addproduct__image">
        <img />
        </div>
        {modal ? (
          <div className="modal">
            <div className="modal__container">
              <h1>Response has been Submitted</h1>
              <i>
                <FaCheckCircle />
              </i>
            </div>
          </div>
        ) : (
          <FormComp setModal={setModal} />
        )}
      </div>
    </>
  );
};

export default React.memo(AddProduct);
