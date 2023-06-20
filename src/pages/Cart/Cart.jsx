import { useContext } from "react";
import { Footer } from "../../components/Footer/Footer";
import "./Cart.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const Cart = () => {
  const { state } = useContext(DataContext);
  return (
    <>
      <div className="cart-section">
        {state?.cart?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};
