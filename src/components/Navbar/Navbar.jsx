import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-image">
          <b>Groovy Goods</b>
        </div>
        <div className="nav-input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-buttons">
          <div className="nav-btn">
            <button>Explore</button>
          </div>
          <div className="nav-btn icons">
            <FavoriteBorderIcon fontSize="large" />
            <p>0</p>
          </div>
          <div className="nav-btn icons">
            <ShoppingBagIcon fontSize="large" />
            <p>0</p>
          </div>
          <div className="nav-btn icons">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};
