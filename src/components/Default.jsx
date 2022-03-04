import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ButtonContainer } from "./Navbar";

function Default(props) {
  const pathname = useLocation().pathname;
  return (
    // <>
    //   <h1>Error Page Not Found!!</h1>
    //   <Link to="/">Go to our Homepage.</Link>
    // </>
    <div className="container mx-auto">
      <div className="row">
        <div className="col-10 mx-auto text-center">
          <h1 className="my-2 display-3 text-title">404</h1>
          <h2 className="my-2 text-title">Page not found</h2>
          <h3>
            The requested URL <span className="text-danger">{pathname}</span>{" "}
            was not found
          </h3>
          <Link to="/">
            <ButtonContainer className="text-title mt-2">
              Go to Our HomePage
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Default;
