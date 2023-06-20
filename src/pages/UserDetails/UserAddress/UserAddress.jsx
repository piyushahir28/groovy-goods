import { useContext } from "react";
import "./UserAddress.css";
import { DataContext } from "../../../context/DataContext";
import { UserNav } from "../../../components/UserNavigation/UserNav";
import { useState } from "react";
import { AddressModal } from "../../../components/Address/AddressModal";

export const UserAddress = () => {
  const [showModal, setShowModal] = useState(false);
  const [addAddress, setAddAddress] = useState(true);
  const { state } = useContext(DataContext);
  return (
    <>
      <AddressModal
        onClose={() => setShowModal(false)}
        show={showModal}
        addAddress={addAddress}
      />
      <div className="user-details">
        <UserNav />
        <div className="address-details">
          <button
            onClick={() => setShowModal(true)}
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
      </div>
    </>
  );
};
