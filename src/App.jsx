import Home from "./components/Home";
import "./styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { ContextProvider } from "./context/GlobalContext";
import About from "./components/About";
function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />}/>
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
