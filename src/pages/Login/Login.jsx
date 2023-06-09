import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loginHandler, token } = useContext(AuthContext);

  const onSubmitHandler = () => {
    loginHandler(formData.email, formData.password);
  };

  if (token) {
    return <h1>"Succefuly Logged In"</h1>;
  }

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
            <input
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              id="userPassword"
              required
            />
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
