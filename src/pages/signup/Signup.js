import React from "react";
import "./Signup.scss";

function Login() {
  return (
    <div className="signup">
      <div className="signupContainer">
        <h1>Log in / Sign up</h1>

        <div className="signupItems">
          <h2>
            Are you ready travel with{" "}
            <span style={{ color: "#ff6b81" }}>Booking App</span>
          </h2>
          <form className="signupSearch">
            <input
              className="signupSearchInput"
              type="text"
              placeholder="Your name..."
            />
            <input
              className="signupSearchInput"
              type="text"
              placeholder="Email..."
            />
            <input
              className="signupSearchInput"
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
