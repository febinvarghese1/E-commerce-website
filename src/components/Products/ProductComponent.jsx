import React from 'react'
import ProductList from './ProductList'
import Sidebar from '../Sidebar/Sidebar';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
const ProductComponent = () => {
  return (
    <div className="productComp">
      <Header />

    <div className='productList__container'>
      <div className="productList__container_left">
      <Sidebar />
      </div>
      <section className="productList__container_right">

      <ProductList />
      </section>

    </div>
    <Footer />

    </div>
  )
}

export default ProductComponent