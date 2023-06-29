import { v4 as uuid } from "uuid";
import { useContext, useState, useEffect } from "react";
import "./AddressModal.css";
import { DataContext } from "../../context/DataContext";

export const AddressModal = (props) => {
  const { ToastHandler, dispatch } = useContext(DataContext);
  const formData = {
    id: uuid(),
    name: "",
    mobile: "",
    city: "",
    pincode: "",
    state: "",
    street: "",
    country: "",
  };

  const [address, setAddress] = useState(formData);

  useEffect(() => {
    if (props.editAddress) {
      setAddress(props.addEditAddress);
    }
  }, [props.editAddress, props.addEditAddress]);

  const editAddressHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT_ADDRESS",
      payload: address,
    });
    props.onClose();
    ToastHandler("Address edited successfully", "success");
    setAddress({
      id: uuid(),
      name: "",
      mobile: "",
      city: "",
      pincode: "",
      state: "",
      street: "",
      country: "",
    });
  };

  const addAddressHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ADDRESS",
      payload: address,
    });
    props.onClose();
    ToastHandler("Address added successfully", "success");
    setAddress({
      id: uuid(),
      name: "",
      mobile: "",
      city: "",
      pincode: "",
      state: "",
      street: "",
      country: "",
    });
  };

  if (!props.show) {
    return null;
  }

  if (props.editAddress) {
    return (
      <>
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <p>Add New Address</p>
            </div>
            <div className="modal-body">
              <form onSubmit={editAddressHandler}>
                <div className="address-form">
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, name: e.target.value });
                    }}
                    type="text"
                    name="userName"
                    placeholder="Name"
                    value={address.name}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, street: e.target.value });
                    }}
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={address.street}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, city: e.target.value });
                    }}
                    type="text"
                    name="city"
                    placeholder="City"
                    value={address.city}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, pincode: e.target.value });
                    }}
                    type="text"
                    name="zipcode"
                    placeholder="ZipCode"
                    value={address.pincode}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, state: e.target.value });
                    }}
                    type="text"
                    name="state"
                    placeholder="State"
                    value={address.state}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, country: e.target.value });
                    }}
                    type="text"
                    name="counrty"
                    placeholder="Country"
                    value={address.country}
                    required
                  />
                  <input
                    onChange={(e) => {
                      setAddress({ ...address, mobile: e.target.value });
                    }}
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={address.mobile}
                    required
                  />
                  <div className="address-btn">
                    <button type="button" onClick={props.onClose}>
                      Cancel
                    </button>
                    <button type="submit">Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <p>Add New Address</p>
          </div>
          <div className="modal-body">
            <form onSubmit={addAddressHandler}>
              <div className="address-form">
                <input
                  onChange={(e) => {
                    setAddress({ ...address, name: e.target.value });
                  }}
                  type="text"
                  name="userName"
                  placeholder="Name"
                  value={address.name}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, street: e.target.value });
                  }}
                  type="text"
                  name="street"
                  placeholder="Street"
                  value={address.street}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, city: e.target.value });
                  }}
                  type="text"
                  name="city"
                  placeholder="City"
                  value={address.city}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, pincode: e.target.value });
                  }}
                  type="text"
                  name="zipcode"
                  placeholder="ZipCode"
                  value={address.pincode}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, state: e.target.value });
                  }}
                  type="text"
                  name="state"
                  placeholder="State"
                  value={address.state}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, country: e.target.value });
                  }}
                  type="text"
                  name="counrty"
                  placeholder="Country"
                  value={address.country}
                  required
                />
                <input
                  onChange={(e) => {
                    setAddress({ ...address, mobile: e.target.value });
                  }}
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={address.mobile}
                  required
                />
                <div className="address-btn">
                  <button
                    type="button"
                    onClick={() => {
                      setAddress({
                        ...address,
                        name: "John",
                        mobile: 9424037088,
                        city: "Pune",
                        pincode: 451556,
                        state: "Mahrashtra",
                        street: "Kharadi",
                        country: "India",
                      });
                    }}
                  >
                    Dummy
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAddress({
                        ...address,
                        name: "",
                        mobile: "",
                        city: "",
                        pincode: "",
                        state: "",
                        street: "",
                        country: "",
                      });
                    }}
                  >
                    Reset
                  </button>
                  <button type="button" onClick={props.onClose}>
                    Cancel
                  </button>
                  <button type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
