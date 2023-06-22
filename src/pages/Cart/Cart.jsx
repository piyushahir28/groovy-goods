import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./Cart.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { state, itemQuantity, itemPrice, discountPrice } =
    useContext(DataContext);

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
        <div className="checkout-section">
          <div className="checkout-title">
            Cart Price Details
            <hr />
          </div>
          <hr />
          <div className="price-details">
            <p>
              <span>Price({itemQuantity}Items)</span>
              <span className="price-right">${itemPrice}</span>
            </p>
            <p>
              <span>Discount</span>
              <span className="price-right">-${discountPrice}</span>
            </p>
            <p>
              <span>Delivery Charges</span>
              <span className="price-right">$69</span>
            </p>
            <p className="total-price">
              <hr />
              <span>Total</span>
              <span className="price-right">
                ${itemPrice - discountPrice + 69}
              </span>
              <hr />
            </p>
          </div>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
        <div className="cart-section">
          {state?.cart?.map((product) => {
            return <ProductCard product={product} cart />;
          })}
        </div>
      </div>
    </>
  );
};
