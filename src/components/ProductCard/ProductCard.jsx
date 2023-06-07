import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./ProductCard.css";

export const ProductCard = () => {
  const product = {
    _id: 1,
    image: "img-product.jpg",
    category: "Women",
    rating: "4.5",
    description: "Womens Floral Print Maxi Dress",
    title: "Elegant Blossoms",
    trending: true,
    original_price: "1499",
    price: "999",
    reviews: "1.2k",
    in_stock: true,
  };
  return (
    <>
      <div className="product-card">
        <img className="product-img" src={product.image} alt="product" />
        <span className="top-left">Trending</span>
        <span className="wishlist-icon">
          <FavoriteBorderIcon />
        </span>
        <span className="rating-icon">
          <StarIcon className="material-icon" />
          {product.rating}
        </span>
        <p className="product-title">
          <b>{product.title}</b>
        </p>
        <span className="price product-price">${product.price}</span>
        <span className="original-price product-price">
          ${product.original_price}
        </span>
        <span className="discount product-price">
          {Math.floor(
            ((product.original_price - product.price) /
              product.original_price) *
              100
          )}
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
