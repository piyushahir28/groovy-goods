import { NavLink, useLocation, useNavigate } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Navbar.css";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  return (
    <>
      <div className="nav-bar">
        <NavLink className="nav-link" to="/">
          <div className="nav-image">
            <b>Groovy Goods</b>
          </div>
        </NavLink>
        <div
          className="nav-input"
          onClick={() => {
            if (location.pathname !== "/products") {
              navigate("/products");
            }
          }}
        >
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              dispatch({
                type: "CHANGE_FILTER",
                payload: e.target.value,
                filterType: "search",
              });
            }}
          />
        </div>
        <div className="nav-buttons">
          <NavLink className="nav-link" to="/products">
            <div className="nav-btn">
              <button>Explore</button>
            </div>
          </NavLink>
          <div className="nav-btn icons">
            <NavLink className="nav-link" to="/wishlist">
              <FavoriteBorderIcon className="user-l" />
            </NavLink>
            <p>0</p>
          </div>
          <div className="nav-btn icons">
            <NavLink className="nav-link" to="/cart">
              <ShoppingBagIcon className="user-l" />
            </NavLink>
            <p>0</p>
          </div>
          <div className="nav-btn icons">
            <NavLink
              className="nav-link"
              to={token ? "/userprofile" : "/login"}
            >
              <AccountCircleIcon className="user-l" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
