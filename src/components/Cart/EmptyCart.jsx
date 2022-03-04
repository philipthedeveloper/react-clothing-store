import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Navbar";

function EmptyCart() {
  return (
    <div className="container mt-5 mx-auto">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
          <Link to="/Products">
            <ButtonContainer className="mt-4">Go to Store</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
