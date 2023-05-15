import React, { useState, createContext, useEffect } from "react";

// create context
export const CartContext = createContext();

// localstorage get item

let cartData = localStorage.getItem("shoe")
  ? JSON.parse(localStorage.getItem("shoe"))
  : [];

let orderData = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState(cartData);

  // order state
  const [orders, setOrders] = useState(orderData);

  // cart amt state
  const [itemAmount, setItemAmount] = useState(0);

  // total prize state
  const [total, setTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  // modal
  let [isModalOpen, setModalIsOpen] = useState(false);

  // notification
  const [alertMsg, setAlertMsg] = useState({
    type: "",
    msg: "",
  });

  // localstorage set item
  useEffect(() => {
    localStorage.setItem("shoe", JSON.stringify(cart));
  }, [cart]);

  // localstorage set item
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // update total amount
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    const orderTotal = orders.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setOrderTotal(orderTotal);
  }, [orders]);

  // alert notification
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlertMsg({
        type: "",
        msg: "",
      });
    }, 2000);

    return () => clearTimeout(timeOut);
  });

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    setAlertMsg({
      type: "cart",
      msg: "Item Added to cart successfully !",
    });
  };

  // remove from the cart
  const removeFromCart = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);

    setAlertMsg({
      type: "cart",
      msg: "Item Removed from the cart successfully !",
    });
  };

  // clear context
  const clearCart = () => {
    setCart([]);

    if (cart.length > 0) {
      setAlertMsg({
        type: "cart",
        msg: "Cart cleared successfully !",
      });
    } else {
      setAlertMsg({
        type: "clear",
        msg: "Cart cleared successfully !",
      });
    }
  };

  // increase button
  const increaseAmount = (id) => {
    const cartItems = cart.find((item) => item.id === id);
    addToCart(cartItems, id);
  };

  // decrease button
  const decreaseAmount = (id) => {
    const cartItems = cart.find((item) => item.id === id);
    if (cartItems) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItems.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItems.amount <= 1) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
        alertMsg,
        isModalOpen,
        setModalIsOpen,
        orders,
        setOrders,
        orderTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
