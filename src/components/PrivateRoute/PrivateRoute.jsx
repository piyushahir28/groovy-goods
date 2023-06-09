import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};
