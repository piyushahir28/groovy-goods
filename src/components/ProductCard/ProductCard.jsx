import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
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
          <FavoriteBorderIcon />
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
