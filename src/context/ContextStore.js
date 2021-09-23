import { useState, createContext } from "react";

export const CartListContext = createContext();

export const ContextProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [bundleObj, setBundleObj] = useState({});
  const [cartToggle, setCartToggle] = useState(false);
  const [customerOrders, setCustomerOrders] = useState([]);

  //----------Actions----------

  const addIncreaseDecreaseItems = (obj, increase) => {
    const cartListHolder = [...cartList];
    let amount = 0,
      isItemContaine = false;

    //--------Increasing and decrasing items quantity.--------

    cartListHolder.forEach((item) => {
      if (item.id === obj.id) {
        if (increase) {
          if (item.qty < 10) {
            item.qty++;
            item.remaining--;
          } else {
            alert("No more stock available.");
          }
        } else if (!increase) {
          if (item.qty > 1) {
            item.qty--;
            item.remaining++;
          } else {
            alert("Item quantity should be atleast 1.");
          }
        }
        isItemContaine = true;
      }
      amount += item.qty * item.price;
    });

    setTotalPrice(amount);

    //--------Add new item.--------
    if (!isItemContaine) {
      cartListHolder.push(obj);
    }

    setCartList(cartListHolder);
  };

  const removeItem = (item) => {
    const cartListHolder = cartList.filter((el) => el.id !== item.id);
    let amount = 0;

    cartListHolder.forEach((el) => {
      amount += el.price * el.qty;
    });

    setTotalPrice(amount);
    setCartList(cartListHolder);
  };

  const passingBundleObj = (item) => {
    setBundleObj(item);
  };

  return (
    <CartListContext.Provider
      value={{
        cartList,
        cartToggle,
        setCartToggle,
        totalPrice,
        addIncreaseDecreaseItems,
        removeItem,
        bundleObj,
        passingBundleObj,
        setCustomerOrders,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
