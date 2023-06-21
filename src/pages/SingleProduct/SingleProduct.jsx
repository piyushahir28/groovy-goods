import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./SingleProduct.css";
import {
  addToCart,
  addToWishList,
  removeFromWishList,
} from "../../Services/Service";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";

export const SingleProduct = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { productID } = useParams();
  const { state, dispatch, ToastHandler } = useContext(DataContext);
  const singleProduct = state.products.find((el) => el._id === productID) || {};
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
  } = singleProduct;
  const addToCartHandler = async () => {
    const response = await addToCart(singleProduct, token);
    dispatch({
      type: "ADD_TO_CART",
      payload: response.data.cart,
    });
    ToastHandler(`${title} added to cart.`, "success");
  };
  const addToWishListHandler = async () => {
    const response = await addToWishList(singleProduct, token);
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: response,
    });
    ToastHandler(`${title} added to wishlist.`, "success");
  };
  const removeFromWishlistHandler = async () => {
    const response = await removeFromWishList(_id, token);
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: response,
    });
    ToastHandler(`${title} removed from wishlist.`, "success");
  };
  return (
    <div className="main-div">
      <div className="single-container">
        <img
          src="https://raw.githubusercontent.com/piyushahir28/groovy-goods/master/public/img-product.jpg"
          alt="product"
        />
        <div className="txt-container">
          <h3>{title}</h3>
          <p className="review-txt">{reviews} Reviews</p>
          <span className="pd-price prd-price">${price}</span>
          <span className="og-price prd-price">
            <s>${original_price}</s>
          </span>
          <span className="dis-price prd-price">
            {Math.floor(((original_price - price) / original_price) * 100)}
            %OFF
          </span>
          <hr />
          <div className="txt-desc">
            <p>
              <b>Description:</b> {description}
            </p>
            <p className="in-stock">
              <b>Availability: </b>
              {in_stock ? "In stock" : "Not in stock"}
            </p>
            <p className="in-stock">
              <b>Category: </b>
              {category}
            </p>
            <p className="in-stock star-icn">
              <span>
                <b>Rating: </b>
                {rating}
              </span>
              <span>
                <StarRateIcon />
              </span>
            </p>
          </div>
          {token && state?.cart.find((product) => product._id === _id) ? (
            <button
              className="prd-button cart-btnn"
              onClick={() => navigate("/cart")}
            >
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
              className="prd-button cart-btnn"
            >
              Add to cart
            </button>
          )}
          {token && state?.wishlist?.find((product) => product._id === _id) ? (
            <button
              className="prd-button"
              onClick={() => removeFromWishlistHandler()}
            >
              Remove from wishlist
            </button>
          ) : (
            <button
              onClick={
                token
                  ? () => {
                      addToWishListHandler();
                    }
                  : () => {
                      navigate("/login");
                    }
              }
              className="prd-button"
            >
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
