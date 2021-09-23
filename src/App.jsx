import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
// import HeaderImgGrid from "./components/HeaderImgGrid";
import Cart from "./containers/Cart";
import Footer from "./components/Footer";
import MainPage from "./containers/MainPage";
import BookingCart from "./containers/BookingCart";
import CategoryList from "./containers/CategoryList";
import CartDetail from "./containers/CartDetail";
import "./style.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Cart />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/bookingCart" component={BookingCart} />
          <Route path="/detailCart" component={CartDetail} />
          <Route path="/categoryList/:id" component={CategoryList} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
