import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../Login/Login.css";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const { signupHandler, token } = useContext(AuthContext);
  const formHandler = (e) => {
    e.preventDefault();
    signupHandler(formData.email, formData.password, formData.name);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  if (token) {
    navigate("/user/profile");
  }

  return (
    <>
      <div className="login-container">
        <h3>Sign Up</h3>
        <form onSubmit={formHandler}>
          <div className="input-container">
            <label htmlFor="userName">Name</label>
            <input
              id="userName"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              placeholder="John"
            />
          </div>
          <div className="input-container">
            <label htmlFor="userEmail">Email</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="userEmail"
              type="email"
              required
              placeholder="john@xyz.com"
            />
          </div>
          <div className="input-container">
            <label htmlFor="userPassword">Password</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder=""
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                id="userPassword"
                required
              />
              {passwordVisible ? (
                <VisibilityIcon
                  onClick={() => togglePasswordVisibility()}
                  className="password-icon"
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => togglePasswordVisibility()}
                  className="password-icon"
                />
              )}
            </div>
          </div>
          <div className="login-button">
            <button type="submit">Create New Account</button>
          </div>
          <div>
            Already have an account? <NavLink to="/login">Sign-in</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
