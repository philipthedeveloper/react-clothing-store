import React, { useContext } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import { productsData } from "../Context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart(props) {
  const value = useContext(productsData);
  const { cart } = value;

  return (
    <>
      <section>
        {cart.length > 0 ? (
          <>
            <Title name="your" title="cart" />
            <CartColumn />
            <CartList value={value} />
            <CartTotals value={value} />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    </>
  );
}

export default Cart;
