import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { DataContext } from "../../context/DataContext";

import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { addToWishList } from "../../Services/Service";
import { AuthContext } from "../../context/AuthContext";

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
          {token ? (
            <FavoriteIcon className="wished-item" />
          ) : (
            <FavoriteBorderIcon
              onClick={
                token
                  ? () => {
                      const wishListData = addToWishList(product, token);
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
        <button className="cart-btn">
          <ShoppingCartIcon fontSize="small" />
          {"    "} Add to cart
        </button>
      </div>
    </>
  );
};
