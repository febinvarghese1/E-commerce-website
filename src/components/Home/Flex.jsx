import React from "react";

const Flex = () => {
  return (
    <div className="flex">
      <div className="flex__col">
        <div className="flex__col_row">
          <img
            src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div className="flex__col_row">
          <img
            src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="flex__col">
        <div className="flex__col_row">
          <img
            src="https://images.unsplash.com/photo-1647517368034-4389fcb678f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
      </div>

    

      <div className="flex__col flex__col--large">
        <div className="flex__col_row">
          <img
            src="https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
        <div className="flex__col_row">
          <div className="flex__col flex__col--row">
            <div className="flex__col_row">
              <img
                src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
              />
            </div>
            <div className="flex__col_row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
