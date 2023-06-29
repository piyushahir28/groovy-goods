import { useContext } from "react";
import "./WishList.css";
import { DataContext } from "../../context/DataContext";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();
  if (state?.wishlist?.length === 0) {
    return (
      <>
        <div className="none-container">
          <h2>Oops! Nothing in Wish List</h2>
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
      <div className="wishlist-container">
        {state?.wishlist?.map((product) => {
          return <ProductCard product={product} wishlistCard />;
        })}
      </div>
    </>
  );
};
