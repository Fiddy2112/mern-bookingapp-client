import React from "react";
import "./Signup.scss";

function Signup() {
  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupHeader">
          <span>X</span>
          <h2>Log in or sign up</h2>
        </div>
        <div className="signupItems">
          <h1>Welcome to Booking App</h1>
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

export default Signup;
