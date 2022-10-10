import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Log in / Sign up</h1>

        <div className="loginItems">
          <h2>
            Are you ready travel with{" "}
            <span style={{ color: "#ff6b81" }}>Booking App</span>
          </h2>
          <form className="loginSearch">
            <input
              className="loginSearchInput"
              type="text"
              placeholder="Your name..."
            />
            <input
              className="loginSearchInput"
              type="password"
              placeholder="Password..."
            />
            <button type="submit" className="btnSubmit">
              OK
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
