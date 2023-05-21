import { NavLink } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <NavLink className="nav-link" to="/">
          <div className="nav-image">
            <b>Groovy Goods</b>
          </div>
        </NavLink>
        <div className="nav-input">
          <input type="text" placeholder="Search" />
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
            <NavLink className="nav-link" to="/login">
              <AccountCircleIcon className="user-l" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
