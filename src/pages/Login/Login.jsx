import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Login.css";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loginHandler } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(formData.email, formData.password);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="login-container">
        <h3>Sign in</h3>
        <form onSubmit={onSubmitHandler}>
          <div className="input-container">
            <label htmlFor="userEmail">Email</label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
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
            <button type="submit">Login</button>
          </div>
          <div className="login-button">
            <button
              type="submit"
              onClick={() => {
                setFormData({
                  ...formData,
                  email: "adarshbalika@gmail.com",
                  password: "adarshbalika",
                });
              }}
            >
              Login as Guest
            </button>
          </div>
          <div>
            Don't have account? <NavLink to="/signup">Sign-Up</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
