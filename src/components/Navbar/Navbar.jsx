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
  const { state } = useContext(DataContext);

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
            {token && state.wishlist.length ? (
              <p className="nav-data">{state.wishlist.length}</p>
            ) : null}
          </div>
          <div className="nav-btn icons">
            <NavLink className="nav-link" to="/cart">
              <ShoppingBagIcon className="user-l" />
            </NavLink>
            {token && state.cart.length ? (
              <p className="nav-data">{state.cart.length}</p>
            ) : null}
          </div>
          <div className="nav-btn icons">
            <NavLink
              className="nav-link"
              to={token ? "/user/profile" : "/login"}
            >
              <AccountCircleIcon className="user-l" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
