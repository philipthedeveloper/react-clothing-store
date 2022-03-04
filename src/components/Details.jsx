import React, { useContext } from "react";
import { productsData } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Navbar";

function Details(props) {
  const { detail, addToCart, openModal } = useContext(productsData);
  const { id, company, img, info, price, title, inCart } = detail;

  return (
    <>
      <div className="container py-5 mx-auto">
        {/* title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>{title}</h1>
          </div>
        </div>
        {/* title ends */}

        {/* product info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} alt="product" className="img-fluid" />
          </div>

          {/* product-text */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model : {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              price : <span>$</span> {price}
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <div>
              <Link to="/">
                <ButtonContainer className="mt-4 special">
                  back to products
                </ButtonContainer>
              </Link>
              <ButtonContainer
                cart
                className="ml-4 special mt-4"
                disabled={inCart}
                onClick={() => {
                  addToCart(id);
                  openModal(id);
                }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>
            </div>
          </div>
        </div>
        {/* product info ends */}
      </div>
    </>
  );
}

export default Details;
