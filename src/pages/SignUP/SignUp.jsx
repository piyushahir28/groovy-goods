import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Login/Login.css";

export const SignUp = () => {
  const [formData, setFormData] = useState([{ email: "", password: "" }]);
  const formHandler = () => {};

  return (
    <>
      <div className="login-container">
        <h3>Sign Up</h3>
        <form onSubmit={formHandler}>
          <div className="input-container">
            <label htmlFor="userName">Name</label>
            <input id="userName" type="text" required placeholder="John" />
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
