import { UserNav } from "../../../components/UserNavigation/UserNav";
import "./UserOrder.css";

export const UserOrder = () => {
  return (
    <>
      <div className="user-details">
        <UserNav />
        <div className="profile-details">
          <h3>No orders placed till yet</h3>
        </div>
      </div>
    </>
  );
};
