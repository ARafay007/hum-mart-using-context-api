import { useContext } from "react";
import { CartListContext } from "../context/ContextStore";

const BookingCart = () => {
  const { bundleObj, addIncreaseDecreaseItems } = useContext(CartListContext);

  const addItem = (item) => {
    addIncreaseDecreaseItems(item, true);
  };

  return (
    <div className="detailDiv">
      <div className="detailDiv_Section">
        <img className="img" src={`${bundleObj.img}`} alt="" />
      </div>
      <div className="detailDiv_Section detailDiv2">
        <h3>
          {bundleObj.bundleName !== "" ? bundleObj.bundleName : bundleObj.name}
        </h3>
        <p className="pricePara">{bundleObj.price}</p>
        <p className="namePara">
          {bundleObj.bundleName !== "" ? bundleObj.name : ""}
        </p>
        <p className="quantityPara">
          Quantity <span>{bundleObj.qty}</span>
        </p>
        <input
          type="button"
          value="ADD TO CART"
          className="btn-addToCart"
          onClick={() => addItem(bundleObj, true)}
        />
      </div>
    </div>
  );
};

export default BookingCart;
