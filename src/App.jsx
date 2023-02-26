import Home from "./components/Home/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";
import Product from "./components/products/Product";
import { ContextProvider } from "./context/GlobalContext";
import About from "./components/pages/About";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductComponent from "./components/products/ProductComponent";
function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductComponent />} />
          <Route path="/about" element={<About />}/>
          <Route path="/add" element={<AddProduct />}/>
          <Route path="/product">
            <Route index element={<Product />} />
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
