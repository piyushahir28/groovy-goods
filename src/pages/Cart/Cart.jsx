import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./Cart.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();
  if (state?.cart?.length === 0) {
    return (
      <>
        <div className="none-container">
          <h2>Oops! Nothing in Cart</h2>
          <div>
            <button onClick={() => navigate("/products")}>
              Explore Products
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cart">
        <div className="cart-section">
          {state?.cart?.map((product) => {
            return <ProductCard product={product} cart />;
          })}
        </div>
        <div className="checkout-section"></div>
      </div>
    </>
  );
};
