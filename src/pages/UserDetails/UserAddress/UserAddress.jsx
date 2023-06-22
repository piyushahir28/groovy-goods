import { useContext } from "react";
import "./UserAddress.css";
import { DataContext } from "../../../context/DataContext";
import { UserNav } from "../../../components/UserNavigation/UserNav";
import { useState } from "react";
import { AddressModal } from "../../../components/Address/AddressModal";

export const UserAddress = () => {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch, ToastHandler } = useContext(DataContext);
  const deleteAddressHAndler = (addressID) => {
    console.log(addressID);
    dispatch({
      type: "DELETE_ADDRESS",
      payload: addressID,
    });
    ToastHandler("Address deleted", "success");
  };

  return (
    <>
      <AddressModal onClose={() => setShowModal(false)} show={showModal} />
      <div className="user-details">
        <UserNav />
        <div className="address-details">
          <button
            onClick={() => setShowModal(true)}
            className="add-address-btn"
          >
            Add New Address
          </button>
          {state.addressList.length > 0 ? (
            state.addressList.map((address) => {
              const {
                id,
                name,
                mobile,
                state,
                street,
                country,
                city,
                pincode,
              } = address;
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
                    <button
                      className="btn-delete card-btn"
                      onClick={() => deleteAddressHAndler(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="profile-details">
              <h3>No address found</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
