import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "../Login/Login.css";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
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
