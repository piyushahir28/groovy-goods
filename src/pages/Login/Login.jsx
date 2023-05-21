import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const [formData, setFormData] = useState([{ email: "", password: "" }]);
  const formHandler = () => {};

  return (
    <>
      <div className="login-container">
        <h3>Sign in</h3>
        <form onSubmit={formHandler}>
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
            <input
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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
              onClick={() =>
                setFormData({
                  email: "guest@piyushahir.com",
                  password: "piyush@123",
                })
              }
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
