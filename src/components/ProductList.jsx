import React, { useContext } from "react";
import { productsData } from "./Context";
import Product from "./Product";
import Title from "./Title";

function ProductList(props) {
  const { data: products } = useContext(productsData);
  return (
    <>
      <div className="py-5">
        <div className="container mx-auto">
          <Title name="our" title="product" />
          <div className="row">
            {products.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
