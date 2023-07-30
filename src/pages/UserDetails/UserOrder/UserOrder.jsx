import { useContext } from "react";
import { UserNav } from "../../../components/UserNavigation/UserNav";
import "./UserOrder.css";
import { DataContext } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";

export const UserOrder = () => {
  const { state } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="user-details">
        <UserNav />
        <div className="profile">
          <h3>Order History</h3>
          {state?.orderList?.length > 0 ? (
            state?.orderList?.map((orders) => {
              const { id, price, items, userAddress } = orders;
              return (
                <div className="order-details">
                  <p>
                    <b>Order ID: </b>
                    {id}
                  </p>
                  <p>
                    <b>Amount Paid: </b>${price}
                  </p>
                  <p>
                    <b>Address: </b>
                    {userAddress}
                  </p>
                  <p>
                    <b>Items Purchased</b>
                  </p>
                  <div className="order-items">
                    {items?.map((item) => {
                      return (
                        <div
                          className="order-item"
                          onClick={() => navigate(`/singleproduct/${item._id}`)}
                        >
                          <img src={item.image} alt={item.title} />
                          <div>
                            <h3>{item.title}</h3>
                            <span>
                              <b>Price</b>
                              {item.price}
                            </span>
                            <br />
                            <span>
                              <b>Qty: </b>
                              {item.qty}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <h3>No orders placed till yet</h3>
          )}
        </div>
      </div>
    </>
  );
};
