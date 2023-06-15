import { useContext, useState } from "react";
import "./UserDetails.css";

import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { Opacity } from "@mui/icons-material";

export const UserDetails = () => {
  const { currUser, logoutHandler } = useContext(AuthContext);
  const { state } = useContext(DataContext);
  const [displayUserProfile, setDisplayUserProfile] = useState("");
  const [displayUSerAddress, setDisplayUserAddress] = useState("display-nav");
  const [displayOrderHistory, setDisplayOrderHistory] = useState("display-nav");
  const [displayAddressForm, setDisplayAddressForm] =
    useState("displayAddress");
  return (
    <>
      <div className={`address-update-form ${displayAddressForm}`}>
        <p>Add New Address</p>
        <form action="">
          <div className="address-form">
            <input type="text" name="userName" placeholder="Name" required />
            <input type="text" name="street" placeholder="Street" required />
            <input type="text" name="city" placeholder="City" required />
            <input type="text" name="zipcode" placeholder="ZipCode" required />
            <input type="text" name="state" placeholder="State" required />
            <input type="text" name="counrty" placeholder="Country" required />
            <input type="tel" name="mobile" placeholder="Mobile" required />
            <div className="address-btn">
              <button>Dummy</button>
              <button>Reset</button>
              <button
                onClick={() => {
                  setDisplayAddressForm("");
                }}
              >
                Cancel
              </button>
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
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
          <button
            onClick={() => {
              setDisplayAddressForm("");
            }}
            className="add-address-btn"
          >
            New Address
          </button>
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
