import { NavLink } from "react-router-dom";

import "./UserNav.css";

export const UserNav = () => {
  return (
    <>
      <div className="user-nav">
        <span>
          <NavLink className="nav-link" to="/user/profile">
            Profile
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link" to="/user/address">
            Address
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link" to="/user/order">
            Orders
          </NavLink>
        </span>
      </div>
    </>
  );
};
