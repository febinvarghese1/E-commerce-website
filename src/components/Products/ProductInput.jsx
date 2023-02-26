import React from "react";
import { IoMdSearch } from "react-icons/io";


const ProductInput = ({setSearchInput}) => {
  return (
    <div>
      <div className="productList__container_right--input">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search ..."
        />
        <IoMdSearch />
      </div>
    </div>
  );
};

export default React.memo(ProductInput);
