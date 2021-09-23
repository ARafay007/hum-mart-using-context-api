import React from "react";
import HeaderImgGrid from "../components/HeaderImgGrid";
// import HeaderImgGrid from "./components/HeaderImgGrid";
import BundleOffer from "./BundleOffer";
import Categories from "../components/Categories";

const MainPage = () => {
  return (
    <React.Fragment>
      <HeaderImgGrid />
      <BundleOffer />
      <Categories />
    </React.Fragment>
  );
};

export default MainPage;
