import React, { useState, useEffect } from "react";
import { storeProducts, detailProduct } from "./data";
export const productsData = React.createContext();

function Context(props) {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState(detailProduct);
  const [modal, setModal] = useState({
    modalOpen: false,
    modalProduct: detailProduct,
  });
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setData(products);
  };

  const getItem = (id) => {
    const item = data.find((item) => item.id === id);
    return item;
  };

  const changeDetail = (id) => {
    const newDetail = getItem(id);
    setDetail(newDetail);
  };

  const addToCart = (id) => {
    const newItem = getItem(id);
    const index = data.indexOf(newItem);
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, inCart: true, count: 1, total: item.price };
      } else {
        return item;
      }
    });
    setCart([...cart, newData[index]]);
    setData(newData);
    if (newItem.title === detail.title) {
      setDetail((prevState) => newData[index]);
    }
  };

  useEffect(() => {
    addTotal();
  }, [cart]);

  useEffect(() => {
    setProducts();
  }, []);

  const openModal = (id) => {
    const product = getItem(id);
    setModal({ modalOpen: true, modalProduct: product });
  };

  const closeModal = (id) => {
    setModal({ ...modal, modalOpen: false });
  };

  const increment = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.count += 1;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });
    setCart(newCart);
  };

  const decrement = (id) => {
    let count;
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.count -= 1;
        count = item.count;
        item.total = item.count * item.price;
        return item;
      } else {
        return item;
      }
    });
    setCart(newCart);
    if (count < 1) {
      removeItem(id);
    }
  };
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);

    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, inCart: false };
      } else {
        return item;
      }
    });
    setData(newData);
  };

  const clearCart = (id) => {
    const newData = data.map((item) => {
      return { ...item, inCart: false };
    });
    setData(newData);
    setCart([]);
  };

  const addTotal = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    let total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <productsData.Provider
      value={{
        data,
        detail,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        addToCart,
        changeDetail,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart,
        modal,
      }}
    >
      {props.children}
    </productsData.Provider>
  );
}

export default Context;
