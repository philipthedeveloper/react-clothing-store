import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart/Cart";
import Home from "./Home";
import ProductList from "./ProductList";
import Details from "./Details";
import Default from "./Default";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal";

function App(props) {
  return (
    <>
      <Navbar />
      <Modal />
      <SuccessModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  );
}

export default App;
