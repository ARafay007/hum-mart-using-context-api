import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartListContext } from "../context/ContextStore";

const Head = (props) => {
  const { setCartToggle, cartList } = useContext(CartListContext);

  const [term, setTerm] = useState("");

  const toggleCart = () => {
    setCartToggle(true);
  };

  const onTextChange = (e) => {
    setTerm(e.target.value);
  };

  const searchItem = () => {
    props.searchItem(term);
  };

  return (
    <React.Fragment>
      <div className={"topDiv"}>
        <div className="topDiv_Content">
          Groceries delivery in Karachi / Mobile phones, Cosmetics, Toys &
          Electronics nationwide
        </div>
        <div className="topDiv_Divider"></div>
        <div className="topDiv_Nav">
          <div className="topDiv_NavLogin">Login</div>
          <div className="topDiv_NavCustCare">Customer Care</div>
          <div className="topDiv_NavContact">
            <ion-icon name="call-outline"></ion-icon> (021) 111 116 278
          </div>
        </div>
      </div>

      <nav className="nav2 nav2-active">
        <div className="nav-item">BEAUTY & PERSONAL CARE</div>
        <div className="nav-item">HOUSEHOLD NEEDS</div>
        <div className="nav-item">GROCERY & STAPLES</div>
        <div className="nav-item">FURNISHING & HOME NEEDS</div>
        <div className="nav-item">BABY KIDS & TOYS</div>
        <div className="nav-item">PHARMACY</div>
        <div className="nav-item">MORE</div>
      </nav>

      <header>
        <div className="searchSection">
          <div className="searchSection_heading">
            <Link to="/" className="searchSection_heading_Link">
              Hum<span>Mart</span>
            </Link>
          </div>
          <div className="searchSection_inputs">
            <input
              type="text"
              className="searchSection_search"
              placeholder="Search entire store here..."
              value={term}
              onChange={(e) => onTextChange(e)}
            />
            <input
              type="button"
              onClick={searchItem}
              className="btn-search"
              value="Search"
            />
          </div>
          <div className="searchSection_Gif">
            <img src="Images/Toys_Gif.gif" alt="Toys Gif" />
          </div>
          <div className="searchSection_Cart">
            <ion-icon
              name="cart-outline"
              className="openCart"
              size="large"
              style={{ color: "rgb(12, 185, 12)" }}
              onClick={toggleCart}
            ></ion-icon>
            <span className="itemQty">{cartList.length} item(s)</span>
          </div>
        </div>

        <nav className="nav">
          <div>
            <Link to={"/categoryList/Personal Care"} className="nav-item-link">
              BEAUTY & PERSONAL CARE
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={"/categoryList/Household Needs"}
              className="nav-item-link"
            >
              HOUSEHOLD NEEDS
            </Link>
          </div>
          <div className="nav-item">
            <Link
              to={"/categoryList/Grocery & Staples"}
              className="nav-item-link"
            >
              GROCERY & STAPLES
            </Link>
          </div>
          <div className="nav-item">FURNISHING & HOME NEEDS</div>
          <div className="nav-item">BABY KIDS & TOYS</div>
          <div className="nav-item">PHARMACY</div>
          <div className="nav-item">
            <Link to={"/"} className="nav-item-link">
              Main Page
            </Link>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Head;
