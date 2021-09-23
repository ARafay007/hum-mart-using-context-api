import React, { useState, useContext } from "react";
import { CartListContext } from "../context/ContextStore";

const CartDetails = () => {
  const { cartList, setCustomerOrders } = useContext(CartListContext);

  const [openCloseModel, setOpenCloseModel] = useState("hideModal");
  const [custName, setCustName] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  const [showDiv, setShowDiv] = useState("verification-rightDiv_infoClose");
  const [showNameInput, setShowNameInput] = useState(
    "verification-rightDiv_nameInputClose"
  );
  const [showGPSpara, setShowGPSpara] = useState(
    "verification-rightDiv_GPSClose"
  );
  const [showAddresInput, setShowAddressInput] = useState(
    "verification-rightDiv_addressInputClose"
  );
  const [showAddressPara, setShowAddressPara] = useState("addressParaHide");
  // const [customerDetails, setCustomerDetails] = useState({ name: '', address: '', contact: '' });

  const toggleModal = (toggle) => {
    toggle ? setOpenCloseModel("") : setOpenCloseModel("hideModal");
  };

  const onTextChange = (e) => {
    if (e.target.dataset.name === "name") {
      setCustName(e.target.value);
    } else if (e.target.dataset.name === "address") {
      setLocation(e.target.value);
    } else if (e.target.dataset.name === "contact") {
      setContact(e.target.value);
    }
  };

  const showPortion = () => {
    setShowDiv("verification-rightDiv_info");
    setShowNameInput("verification-rightDiv_nameInput");
    setShowGPSpara("verification-rightDiv_GPS");
    setShowAddressInput("verification-rightDiv_addressInput");
    setShowAddressPara("");
  };

  const bookOrder = () => {
    const ms = new Date();
    const orders = [...cartList];
    const orderObj = {
      id: ms.getMilliseconds(),
      name: custName,
      location,
      contact,
      orders,
    };
    setCustomerOrders(orderObj);
  };

  const getLocation = () => {
    let address = "";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `http://open.mapquestapi.com/geocoding/v1/reverse?key=3gvkIEVDNTU9a025GAqEkA35AupXMiD6&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`
        )
          .then((resp) => resp.json())
          .then((data) => {
            const { adminArea3, adminArea5, street } =
              data.results[0].locations[0];
            address = `${street} ${adminArea5} ${adminArea3}`;
            // console.log(address);
            setLocation(address);
          });
      },
      (onError) => {
        alert("Please allow this site to get your location.");
        console.log(onError);
      }
    );
  };

  const myCartHeading = () => {
    let totalPrice = 0;

    cartList.forEach((el) => (totalPrice += el.qty * el.price));

    return (
      <div>
        <span>My Cart</span> <span>Rs {totalPrice}</span>
      </div>
    );
  };

  const orderDetails = () => {
    if (cartList.length === 0) return;
    else {
      return cartList.map((el) => {
        return (
          <div className="cart-itemInfo" key={el.id}>
            <div className="cart-itemInfo-img">
              <img className="cart-Img" src={`${el.img}`} alt="" />
            </div>
            <div className="cart-itemInfo-detail">
              <p className="cart-itemInfo-p1">{el.bundleName}</p>
              <p className="cart-itemInfo-p2">{el.name}</p>
            </div>
            <div className="cart-itemInfo-price">
              <p>Qty x {el.qty}</p>
              <p>Rs {el.price}</p>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <React.Fragment>
      <section className="section-blank_booking">
        <div className="section-blank__Container">
          <div className="section-blank_Container-leftDiv">
            <div className="numberVerification">
              <div className="numberVerification-leftDiv">
                <span>1</span>
              </div>
              <div className="numberVerification-rightDiv">
                <span>Phone Number Verification</span>
                <p className="numberVerification-rightDiv-p1">
                  We need your phone number so that we can update you about your
                  order.
                </p>
                <p>Your 11 digit mobile number</p>
                <input
                  type="text"
                  className="numberVerification_Input"
                  placeholder="03"
                  data-name="contact"
                  value={contact}
                  onChange={onTextChange}
                />
                <input
                  type="button"
                  className="numberVerification_btn"
                  value="Next"
                  onClick={showPortion}
                />
              </div>
            </div>
            <div className="verificationDivs">
              <div className="verificationDiv-leftDiv">
                <span>2</span>
              </div>
              <div className="verification-rightDiv">
                Delivery Address
                <div className={`${showDiv}`}>
                  <input
                    type="text"
                    placeholder="First & Last Name"
                    data-name="name"
                    value={custName}
                    onChange={onTextChange}
                    className={`${showNameInput}`}
                  />

                  <p onClick={getLocation} className={`${showGPSpara}`}>
                    Click here to fill this address using current location
                  </p>

                  <p className={`${showAddressPara}`}>Address</p>

                  <input
                    type="text"
                    value={location}
                    data-name="address"
                    onChange={onTextChange}
                    className={`${showAddresInput}`}
                  />
                </div>
              </div>
            </div>
            <div className="verificationDivs">
              <div className="verificationDiv-leftDiv">
                <span>3</span>
              </div>
              <div className="verification-rightDiv">Delivery Date & Time</div>
            </div>
            <div className="verificationDivs">
              <div className="verificationDiv-leftDiv">
                <span>4</span>
              </div>
              <div className="verification-rightDiv">Payment</div>
            </div>
          </div>
          <div className="section-blank_Container-rightDiv">
            {myCartHeading()}
            {orderDetails()}
            <button
              className="section-blank_Container-rightDiv-button"
              onClick={() => toggleModal(true)}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </section>

      <div
        className={`modal ${openCloseModel}`}
        onClick={() => toggleModal(false)}
      >
        <div
          className="modal-UserInfo"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <button
              className="modal-CloseBtn"
              onClick={() => toggleModal(false)}
            >
              X
            </button>
          </div>
          <div className="modal-UserInfo-div">
            <label>Name</label>
            <input
              type="text"
              className="nameField"
              placeholder="Enter your name..."
              data-name="name"
              value={custName}
              onChange={onTextChange}
            />
            <label>Address</label>
            <input
              type="text"
              className="addressField"
              placeholder="Enter your address..."
              data-name="address"
              value={location}
              onChange={onTextChange}
            />
            <label>Contact</label>
            <input
              type="text"
              className="contactField"
              placeholder="Enter your contact number..."
              data-name="contact"
              value={contact}
              onChange={onTextChange}
            />
          </div>
          <div>
            <button className="bookOrder" onClick={bookOrder}>
              Done
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartDetails;
