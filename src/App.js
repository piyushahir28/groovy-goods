import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/Home/HomePage";
import { ProductList } from "./pages/ProductList/ProductList";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUP/SignUp";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { SingleProduct } from "./pages/SingleProduct/SingleProduct";
import { TestAPI } from "./mockman";
import { UserAddress } from "./pages/UserDetails/UserAddress/UserAddress";
import { UserOrder } from "./pages/UserDetails/UserOrder/UserOrder";
import { UserProfile } from "./pages/UserDetails/UserProfile/UserProfile";
import { Checkout } from "./pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/singleproduct/:productID" element={<SingleProduct />} />
        <Route path="/mockman" element={<TestAPI />} />
        <Route
          path="/user/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/address"
          element={
            <PrivateRoute>
              <UserAddress />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/order"
          element={
            <PrivateRoute>
              <UserOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
