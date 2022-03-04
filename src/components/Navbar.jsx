import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar(props) {
  return (
    <>
      <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5 p-2 bg-dark">
        <span className="ml-4 mr-4">
          <Link to="/" className="img-thumbnail">
            <i className="fa fa-home p-2 btn-lg"></i>
          </Link>
        </span>

        <ul className="navbar-nav align-items-center">
          <li className="text-capitalize ml-5 nav-item f">
            <Link to="/products" className="nav-link">
              products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className=" ml-auto mr-4 ">
          <ButtonContainer className="btn text-capitalize">
            <span className="mr-lg-2 mr-md-2">
              <i className="fa fa-shopping-cart"></i>
            </span>
            <span className="d-none d-lg-inline-block d-md-inline-block">
              my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavContainer>
    </>
  );
}

export const ButtonContainer = styled.button`
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold !important;
  color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--primaryBlue)"};
  text-transform: capitalize !important;
  border: 1px solid var(--primaryBlue);
  border-radius: 0.4rem;
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--primaryBlue)"};
  text-transform: capitalize;
  padding: 0.4rem 0.7rem;
  transition: background-color 0.4s;
  &:hover {
    background-color: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--primaryBlue)"};
    color: var(--mainDark) !important;
  }
`;

const NavContainer = styled.nav`
  background-color: var(--mainDark) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem !important;
  }
`;

export default Navbar;
