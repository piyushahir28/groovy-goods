import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductCard.css";
import {
  addToCart,
  addToWishList,
  incDecCart,
  removeFromCart,
  removeFromWishList,
} from "../../Services/Service";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export const ProductCard = ({ product, cart }) => {
  const { token } = useContext(AuthContext);
  const { state, dispatch, ToastHandler } = useContext(DataContext);
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
    qty,
  } = product;

  const addToCartHandler = async () => {
    const response = await addToCart(product, token);
    dispatch({
      type: "ADD_TO_CART",
      payload: response.data.cart,
    });
    ToastHandler(`${title} added to cart.`, "success");
  };

  const addToWishListHandler = async () => {
    const response = await addToWishList(product, token);
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: response,
    });
    ToastHandler(`${title} added to wishlist.`, "success");
  };

  const removeFromCartHandler = async () => {
    const response = await removeFromCart(_id, token);
    console.log(response);
    dispatch({
      type: "ADD_TO_CART",
      payload: response,
    });
    ToastHandler(`${title} removed from cart.`, "success");
  };

  const removeFromWishlistHandler = async () => {
    const response = await removeFromWishList(_id, token);
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: response,
    });
    ToastHandler(`${title} removed from wishlist.`, "success");
  };

  const handleCartQty = async (actionType) => {
    const response = await incDecCart(_id, actionType, token);
    dispatch({
      type: "ADD_TO_CART",
      payload: response,
    });
  };

  if (cart) {
    return (
      <>
        <div className="cart-card">
          <img
            onClick={() => navigate(`/singleproduct/${_id}`)}
            className="cart-img"
            src={image}
            alt="product"
          />
          {trending && <span className="top-left">Trending</span>}
          <span className="cart-rating-icon">
            <StarIcon className="material-icon" />
            {rating}
          </span>
          <div className="cart-details">
            <p className="cart-product-title">
              <b>{title}</b>
            </p>
            <span className="price cart-product-price">${price}</span>
            <span className="original-price cart-product-price">
              ${original_price}
            </span>
            <br />
            <br />
            <div className="cart-qty">
              <button onClick={() => handleCartQty("decrement")}>-</button>
              <span>{qty}</span>
              <button onClick={() => handleCartQty("increment")}>+</button>
            </div>
            <br />
            <button
              className="cart-cart-btn"
              onClick={() => removeFromCartHandler()}
            >
              Remove from Cart
            </button>
            {token && state?.wishlist.find((product) => product._id === _id) ? (
              <button
                className="cart-cart-btn"
                onClick={() => removeFromWishlistHandler()}
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                onClick={
                  token
                    ? () => addToWishListHandler()
                    : () => {
                        navigate("/login");
                      }
                }
                className="cart-cart-btn"
              >
                Add to WishList
              </button>
            )}
          </div>
        </div>
      </>
    );
  }

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
            <FavoriteIcon
              onClick={() => removeFromWishlistHandler()}
              className="wished-item"
            />
          ) : (
            <FavoriteBorderIcon
              onClick={
                token
                  ? () => {
                      addToWishListHandler();
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
