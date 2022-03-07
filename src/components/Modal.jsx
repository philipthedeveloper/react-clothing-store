import React, { useContext } from "react";
import styled from "styled-components";
import { productsData } from "./Context";
import { ButtonContainer } from "./Navbar";
import { Link } from "react-router-dom";

function Modal(props) {
  const {
    modal: {
      modalOpen,
      modalProduct: { img, title, price },
    },
    closeModal,
  } = useContext(productsData);

  return (
    <>
      {modalOpen ? (
        <ModalContainer>
          <div className="container mx-auto">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
              >
                <h5>item added to cart</h5>
                <img src={img} alt="product" className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">price : $ {price}</h5>
                <Link to="/">
                  <ButtonContainer
                    onClick={() => closeModal()}
                    className="col-8 mx-auto mt-2"
                  >
                    Store
                  </ButtonContainer>
                </Link>

                <Link to="/cart">
                  <ButtonContainer
                    className="mt-2"
                    cart
                    onClick={() => closeModal()}
                  >
                    go to cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;

export default Modal;
