import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./Home.css";
import { Footer } from "../Footer/Footer";
import { DataContext } from "../../context/DataContext";

export const Home = () => {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="main-image">
          <img src="./home.jpg" alt="header" />
        </div>
        <div className="main-header">
          <h1>
            Groove into Funky Ecommerce Delights -{" "}
            <span>Shop, Jam, Repeat!</span>
          </h1>
          <NavLink className="nav-link" to="/products">
            <button>Shop Now</button>
          </NavLink>
        </div>
      </div>
      <div className="category-header">
        <div>
          <h2>
            Shop by <span>Category</span>
          </h2>
        </div>
      </div>
      <br />
      <div className="category-container">
        {state.categories.map(({ _id, categoryName }) => (
          <div
            key={_id}
            onClick={() => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: categoryName,
                filterType: "category",
              });
              navigate("/products");
            }}
            className="category-card"
          >
            <p className="card-text">{categoryName}</p>
            <img src="./category.png" alt="tshirt" />
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
