import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./SingleProduct.css";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";

export const SingleProduct = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { productID } = useParams();
  const { state } = useContext(DataContext);
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
  console.log(singleProduct);

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
          <button
            onClick={
              token
                ? () => {}
                : () => {
                    navigate("/login");
                  }
            }
            className="prd-button cart-btnn"
          >
            Add to cart
          </button>
          <button
            onClick={
              token
                ? () => {}
                : () => {
                    navigate("/login");
                  }
            }
            className="prd-button"
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
