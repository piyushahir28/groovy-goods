import { useContext, useState } from "react";
import "./UserDetails.css";

import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export const UserDetails = () => {
  const { currUser, logoutHandler } = useContext(AuthContext);
  const { state } = useContext(DataContext);
  const [displayUserProfile, setDisplayUserProfile] = useState("");
  const [displayUSerAddress, setDisplayUserAddress] = useState("display-nav");
  const [displayOrderHistory, setDisplayOrderHistory] = useState("display-nav");
  return (
    <>
      {/* <div className="address-update-form">
        <h3>Piyush Ahir</h3>
        <p>Neemuch Madhya Pradesh</p>
      </div> */}
      <div className="user-details">
        <div className="user-nav">
          <span
            onClick={() => {
              setDisplayUserProfile("");
              setDisplayUserAddress("display-nav");
              setDisplayOrderHistory("display-nav");
            }}
          >
            Profile
          </span>
          <span
            onClick={() => {
              setDisplayUserProfile("display-nav");
              setDisplayUserAddress("");
              setDisplayOrderHistory("display-nav");
            }}
          >
            Address
          </span>
          <span
            onClick={() => {
              setDisplayUserProfile("display-nav");
              setDisplayUserAddress("display-nav");
              setDisplayOrderHistory("");
            }}
          >
            Orders
          </span>
        </div>
        <div className={`profile-details ${displayUserProfile}`}>
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
        <div className={`address-details ${displayUSerAddress}`}>
          <button className="add-address-btn">New Address</button>
          {state.addressList.map((address) => {
            const { name, mobile, state, street, country, city, pincode } =
              address;
            return (
              <div className="address-card">
                <h3>{name}</h3>
                <p>{mobile}</p>
                <p>
                  {street}, {city},
                </p>
                <p>
                  {state}, {country}, {pincode}
                </p>
                <div>
                  <button className="btn-edit card-btn">Edit</button>
                  <button className="btn-delete card-btn">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`profile-details ${displayOrderHistory}`}>
          <h3>No orders placed till yet</h3>
        </div>
      </div>
    </>
  );
};
