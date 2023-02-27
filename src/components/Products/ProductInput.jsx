import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ProductInput = ({ setSearchInput }) => {
  return (
    <div>
      <div className="productList__container_right--input">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search ..."
        
        />
        <i>
          <AiOutlineSearch />
        </i>
        
      </div>
    </div>
  );
};

export default React.memo(ProductInput);
