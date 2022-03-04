import React, { useContext } from "react";
import styled from "styled-components";
import { productsData } from "./Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Product({ product }) {
  const { changeDetail, addToCart, openModal } = useContext(productsData);
  const { title, img, price, inCart, id } = product;

  return (
    <>
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={(e) => changeDetail(id)}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={(e) => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0">in Cart</p>
              ) : (
                <i className="fa fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .img-container:hover .cart-btn {
    transform: translate(0%, 0%)
  }

  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    background-color: var(--primaryBlue);
    color var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    cursor: pointer;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
    font-size: 1.4rem;

  &:hover {
    color: var(--mainBlack);
  }

  &:focus {
    outline: none;
  }
`;

export default Product;
