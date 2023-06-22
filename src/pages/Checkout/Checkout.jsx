import { useContext, useState } from "react";
import "./Checkout.css";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { AddressModal } from "../../components/Address/AddressModal";

export const Checkout = () => {
  const { ToastHandler, state, itemPrice, discountPrice, itemQuantity } =
    useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <>
      <AddressModal
        onClose={() => setShowModal(false)}
        show={showModal}
        addAddress
      />
      <div className="checkout-container">
        <div className="address-section">
          <div className="selecetd-address">Address Details</div>
          {state.addressList.length > 0 ? (
            state?.addressList?.map((address) => {
              const {
                id,
                name,
                street,
                pincode,
                country,
                state,
                mobile,
                city,
              } = address;
              return (
                <div className="display-address-flex">
                  <div>
                    <input
                      onChange={() =>
                        setSelectedAddress(
                          `${name}, ${street}, ${city}, ${state}, ${country}, ${pincode}, Mob - ${mobile}`
                        )
                      }
                      type="radio"
                      name="address"
                      id={id}
                    />
                  </div>
                  <div>
                    <label htmlFor={id}>
                      <span className="user-name">{name}</span>
                      <br />
                      {street}, {city}, {state}, {country}, {pincode}
                      <br />
                      <b>Mobile:</b> {mobile}
                    </label>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Please add a address</div>
          )}
          <button onClick={() => setShowModal(!showModal)}>
            Add New Address
          </button>
        </div>
        <div className="checkout-section">
          <div className="checkout-title">
            Price Details
            <hr />
          </div>
          <hr />
          <div className="price-details">
            <p>
              <span>Price({itemQuantity}Items)</span>
              <span className="price-right">${itemPrice}</span>
            </p>
            <p>
              <span>Discount</span>
              <span className="price-right">-${discountPrice}</span>
            </p>
            <p>
              <span>Delivery Charges</span>
              <span className="price-right">$69</span>
            </p>
            <p className="total-price">
              <hr />
              <span>Total</span>
              <span className="price-right">
                ${itemPrice - discountPrice + 69}
              </span>
              <hr />
              <span>Address:</span>
            </p>
            {selectedAddress ? (
              <span>{selectedAddress}</span>
            ) : (
              <span>Please select address</span>
            )}
          </div>
          <br />
          <button
            onClick={() => {
              selectedAddress
                ? console.log("Order Placed")
                : ToastHandler("Please select a address", "warning");
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
