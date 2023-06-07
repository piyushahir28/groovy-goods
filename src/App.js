import { Routes, Route } from "react-router-dom";

import "./App.css";

import Mockman from "mockman-js";
import { Navbar } from "./components/Navbar/Navbar";
import { HomePage } from "./pages/Home/HomePage";
import { ProductList } from "./pages/ProductList/ProductList";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUP/SignUp";

function App() {
  const testAPI = false;

  if (testAPI) {
    return (
      <>
        <Mockman />
      </>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
