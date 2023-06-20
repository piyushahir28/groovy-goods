import { useContext } from "react";
import "./AddressModal.css";
import { DataContext } from "../../context/DataContext";

export const AddressModal = (props) => {
  const { state } = useContext(DataContext);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (!props.show) {
    return null;
  }

  if (props.addAddress) {
    return (
      <>
        <div className="modal" onClick={props.onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <p>Add New Address</p>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler}>
                <div className="address-form">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    required
                  />
                  <input type="text" name="city" placeholder="City" required />
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="ZipCode"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    required
                  />
                  <input
                    type="text"
                    name="counrty"
                    placeholder="Country"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    required
                  />
                  <div className="address-btn">
                    <button>Dummy</button>
                    <button>Reset</button>
                    <button onClick={props.onClose}>Cancel</button>
                    <button type="submit">Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};
