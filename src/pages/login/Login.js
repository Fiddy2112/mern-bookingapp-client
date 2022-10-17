import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { actionType } from "../../context/reducer";
import { useProvider } from "../../context/StateProvider";
import "./Login.scss";

function Login() {
  const [inputForm, setInputForm] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const [initialState, dispatch] = useProvider();
  const { user, error, loading } = initialState;

  const handleChange = (e) => {
    setInputForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_LOADING,
    });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        inputForm
      );
      dispatch({
        type: actionType.SET_LOGIN,
        user: res.data,
      });
      navigate("/");
    } catch (err) {
      dispatch({
        type: actionType.SET_LOGIN_FAILURE,
        error: err.response.data,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  console.log("user", user);
  console.log("error", error);
  return (
    <div className="login">
      <div className="loginBackground"></div>
      <div className="loginContainer">
        <h1>Log in / Sign up</h1>

        <div className="loginItems">
          <h2>
            Are you ready travel with{" "}
            <span style={{ color: "#ff6b81" }}>Booking App</span>
          </h2>
          <div className="loginSearch">
            <input
              className="loginSearchInput"
              type="text"
              id="username"
              placeholder="Your name..."
              onChange={handleChange}
            />
            <input
              className="loginSearchInput"
              type="password"
              id="password"
              placeholder="Password..."
              onChange={handleChange}
            />
            <button
              disabled={loading}
              type="submit"
              className="btnSubmit"
              onClick={handleClick}
            >
              OK
            </button>
            {error && <span>{error.message}</span>}
          </div>
          <span>
            Are you sure you want to
            <Link to="/signup">signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
