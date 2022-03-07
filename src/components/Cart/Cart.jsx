import React, { useContext } from "react";
import { useNavigate } from "react-router";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { productsData } from "../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart(props) {
  const value = useContext(productsData);
  const { cart, showModal } = value;
  const navigate = useNavigate();

  return (
    <>
      <section>
        {cart.length > 0 ? (
          <>
            <Title name="your" title="cart" />
            <CartColumn />
            <CartList value={value} />
            <CartTotals
              value={value}
              navigate={navigate}
              showModal={showModal}
            />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
}

export default Cart;
