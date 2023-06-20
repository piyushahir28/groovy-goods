import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductCard.css";
import { addToCart, addToWishList } from "../../Services/Service";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export const ProductCard = ({ product }) => {
  const { token } = useContext(AuthContext);
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const {
    _id,
    image,
    category,
    rating,
    description,
    title,
    trending,
    original_price,
    price,
    reviews,
    in_stock,
  } = product;

  const addToCartHandler = async () => {
    const response = await addToCart(product, token);
    dispatch({
      type: "ADD_TO_CART",
      payload: response.data.cart,
    });
  };

  return (
    <>
      <div className="product-card">
        <img
          onClick={() => navigate(`/singleproduct/${_id}`)}
          className="product-img"
          src={image}
          alt="product"
        />
        {trending && <span className="top-left">Trending</span>}
        <span className="wishlist-icon">
          {token && state?.wishlist?.find((prd) => prd._id === _id) ? (
            <FavoriteIcon className="wished-item" />
          ) : (
            <FavoriteBorderIcon
              onClick={
                token
                  ? () => {
                      const wished = addToWishList(product, token);
                      console.log(wished);
                    }
                  : () => {
                      navigate("/login");
                    }
              }
              className="icon-wishlist"
            />
          )}
        </span>
        <span className="rating-icon">
          <StarIcon className="material-icon" />
          {rating}
        </span>
        <p className="product-title">
          <b>{title}</b>
        </p>
        <span className="price product-price">${price}</span>
        <span className="original-price product-price">${original_price}</span>
        <span className="discount product-price">
          {Math.floor(((original_price - price) / original_price) * 100)}
          %OFF
        </span>
        <br />
        {token && state?.cart.find((product) => product._id === _id) ? (
          <button className="cart-btn" onClick={() => navigate("/cart")}>
            <ShoppingCartIcon fontSize="small" />
            Go to Cart
          </button>
        ) : (
          <button
            onClick={
              token
                ? () => addToCartHandler()
                : () => {
                    navigate("/login");
                  }
            }
            className="cart-btn"
          >
            <ShoppingCartIcon fontSize="small" />
            Add to cart
          </button>
        )}
      </div>
    </>
  );
};
