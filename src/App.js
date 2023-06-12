import { Routes, Route } from "react-router-dom";

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
      </Routes>
    </div>
  );
}

export default App;
