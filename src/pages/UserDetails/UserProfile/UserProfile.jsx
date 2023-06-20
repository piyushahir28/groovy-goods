import { useContext } from "react";

import "./UserProfile.css";
import { AuthContext } from "../../../context/AuthContext";
import { UserNav } from "../../../components/UserNavigation/UserNav";

export const UserProfile = () => {
  const { currUser, logoutHandler } = useContext(AuthContext);
  return (
    <>
      <div className="user-details">
        <UserNav />
        <div className="profile-details">
          <p>
            <b>Name:</b> {currUser.name}
          </p>
          <p>
            <b>Email:</b> {currUser.email}
          </p>
          <button onClick={() => logoutHandler()} className="logout-btn">
            Logout
          </button>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
