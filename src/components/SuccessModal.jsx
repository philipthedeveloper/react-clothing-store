import React, { useContext } from "react";
import styled from "styled-components";
import { productsData } from "./Context";
import { ButtonContainer } from "./Navbar";
import { Link } from "react-router-dom";

function SuccessModal(props) {
  const { showModal, success } = useContext(productsData);

  return (
    <>
      {success ? (
        <ModalContainer>
          <div className="container mx-auto">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
              >
                <h5>Payment Successful</h5>
                <div class="svg-container my-4">
                  <svg
                    class="ft-green-tick"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100"
                    width="100"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <circle
                      class="circle"
                      fill="#5bb543"
                      cx="24"
                      cy="24"
                      r="22"
                    />
                    <path
                      class="tick"
                      fill="none"
                      stroke="#FFF"
                      stroke-width="6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M14 27l5.917 4.917L34 17"
                    />
                  </svg>
                </div>
                <Link to="/">
                  <ButtonContainer
                    onClick={() => showModal()}
                    className="col-8 mx-auto mt-2 success"
                  >
                    Close
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

export default SuccessModal;
